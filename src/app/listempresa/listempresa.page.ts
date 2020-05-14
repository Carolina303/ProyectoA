import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listempresa',
  templateUrl: './listempresa.page.html',
  styleUrls: ['./listempresa.page.scss'],
})
export class ListempresaPage  {
  listempresa : any

  constructor( private router : Router ) {

  }
  ngOnInit(){
    fetch("./assets/data/data.json").then(res => res.json()).then(json => {
      this.listempresa=json;
    })
  }

  gotoInversion(name,img,text){
    this.router.navigate( ['/inversion',name,img,text] );
  }

} 
