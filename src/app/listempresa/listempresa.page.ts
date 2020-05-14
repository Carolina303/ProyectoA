import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listempresa',
  templateUrl: './listempresa.page.html',
  styleUrls: ['./listempresa.page.scss'],
})
export class ListempresaPage  {
  listaempresa =[
    {
      id: '1',
      name: "cuisoft",
      img: 'assets/logo.png',
    },
    {
      id: '2',
      name: "cuisoft",
      img: 'assets/logo.png',
    },
  ];

}
