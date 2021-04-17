import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjetacredito',
  templateUrl: './tarjetacredito.component.html',
  styleUrls: ['./tarjetacredito.component.css']
})
export class TarjetacreditoComponent implements OnInit {

  listTarjetas: any[] = [
    {
      titulo: 'Yader Campbell',
      numeroTarjeta: '534567',
      fechaExpiracion: '11/23',
      cvv: '1234',
    },
    {
      titulo: 'Xib Ach Well',
      numeroTarjeta: '53765467',
      fechaExpiracion: '01/23',
      cvv: '1211234',
    }
  ];

  form: FormGroup;

  constructor(fb: FormBuilder,private toastr: ToastrService) {
    this.form = fb.group({
      titulo: ['',Validators.required],  // TODO:Validators.required sirve para hacer que el campo sea obligatorio
      numeroTarjeta: ['',[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['',[Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
   }

  ngOnInit(): void {
  }

  agregarTarjeta(){
    console.log(this.form);

    const tarjeta: any = {
      titulo: this.form.get('titulo')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }

    this.listTarjetas.push(tarjeta);
    this.toastr.success('La tarjeta fue registrada con exito', 'Trjeta registrada');
    this.form.reset();
  }

}
