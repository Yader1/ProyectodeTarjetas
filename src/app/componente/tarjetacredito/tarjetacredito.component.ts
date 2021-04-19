import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetasService } from 'src/app/services/tarjetas.service';

@Component({
  selector: 'app-tarjetacredito',
  templateUrl: './tarjetacredito.component.html',
  styleUrls: ['./tarjetacredito.component.css']
})
export class TarjetacreditoComponent implements OnInit {

  listTarjetas: any[] = [];
  accion= 'AGREGAR';
  form: FormGroup;
  id: number | undefined;

  constructor(fb: FormBuilder,private toastr: ToastrService, private _tarjetaService: TarjetasService) {
    this.form = fb.group({
      titulo: ['',Validators.required],  // TODO:Validators.required sirve para hacer que el campo sea obligatorio
      numeroTarjeta: ['',[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['',[Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
   }

  ngOnInit(): void {
   this.obtenerTarjetas();
  }

  obtenerTarjetas(){
    this._tarjetaService.getListTarjetas().subscribe(data => {
        console.log(data);
        this.listTarjetas = data;
    },error => {
      console.log(error);
    });
  }

  guardarTarjeta(){
    const tarjeta: any = {
      titulo: this.form.get('titulo')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }

    if(this.id == undefined){
      //Agrgar nueva tarjeta
      this._tarjetaService.saveTarjetas(tarjeta).subscribe(data => {
        this.toastr.success('La tarjeta fue registrada con exito', 'Tarjeta registrada');
        this.obtenerTarjetas();
        this.form.reset();
      },error =>{
        this.toastr.error('Disculpe, acaba de ocurrir un error', 'Error');
        console.log(error);
      });

    }else{

      tarjeta.id = this.id;

      //Editar tarjeta
      this._tarjetaService.updateTarjetas(this.id,tarjeta).subscribe(data =>{
        this.form.reset();
        this.accion = 'AGREGAR';
        this.id = undefined;
        this.toastr.success('La tarjeta fue actualizada con exito', 'Tarjeta actualizada');
        this.obtenerTarjetas();
      },error =>{console.log(error);});
    }
    
  }

  eliminar(id: number){
    this._tarjetaService.deleteTarjetas(id).subscribe(data => {
      this.toastr.error('La tarjeta fue eliminada con exito','Tarjeta eliminada');
      this.obtenerTarjetas();
    },error =>{
      console.log(error);
    }); 
  }

  editarTarjetas(tarjeta: any){
    this.accion = 'EDITAR';
    this.id = tarjeta.id;

    this.form.patchValue({
      titulo : tarjeta.titulo,
      numeroTarjeta : tarjeta.numeroTarjeta,
      fechaExpiracion : tarjeta.fechaExpiracion,
      cvv : tarjeta.cvv
    });
  }

}
