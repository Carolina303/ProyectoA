import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slides = [
    {

      img: '/assets/img/img1.jpg',
      titulo: 'Como funcionamos',  
    },
    {
      img:'assets/img/img1.jpg',
      titulo: 'Registras tu empresa o micronegocio' ,
    },
    {
      img:'assets/img/img1.jpg',
      titulo: 'Validamos que todo este en orden', 
    },
    {
      img:'assets/img/img1.jpg',
      titulo: 'con un algoritmo analizamos los negocios que te pudieran interesar' ,
    },
  ];

  slides1 = [
    {
      img:'/assets/img/ejem1.jpg',
      titulo: 'Te interesa'
    },
    {
      img:'/assets/img/ejem2.jpg',
      titulo: 'Te interesa'
    },
    {
      img:'/assets/img/ejem3.jpg',
      titulo: 'Te interesa'
    },
    
  ];
  vertical={
    direction:"vertical",
  };

  horizontal={
    direction:"horizontal",
    loop:true,
  };





//NO MOVER, NO MODIFICAR ESTO ES DE BACK
  top=[];
  constructor(  private activatedRoute: ActivatedRoute ) { }
  ngOnInit(){
    fetch("./assets/data/data.json").then(res => res.json()).then(json => {
      this.top[0]=json[json.length-1];
    });
  }
//NO MOVER, NO MODIFICAR ESTO ES DE BACK
}
