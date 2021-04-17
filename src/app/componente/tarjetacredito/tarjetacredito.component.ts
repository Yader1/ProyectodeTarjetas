import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
