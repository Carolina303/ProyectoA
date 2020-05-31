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

      img: '/assets/img/Car1/1.jpg',
      titulo: '¿Quienes  somos?',  
    },
    {
      img:'/assets/img/Car1/2.jpg',
      titulo: 'Tank es una app que hace más sencilla la relación entre empresarios' ,
    },
    {
      img:'/assets/img/Car1/3.jpg',
      titulo: 'Creamos puentes entre distintos negocios de manera segura', 
    },
    {
      img:'/assets/img/Car1/4.jpeg',
      titulo: 'Analizamos los negocios de tu interes' ,
    },
  ];

  slides1 = [
    {
      img:'/assets/img/Car2/1.jpeg',
      titulo: 'Registras tu empresa o negocio',

    },
    {
      img:'/assets/img/Car2/2.jpg',
      titulo: 'Con un algoritmo, evaluamos tus intereses de crecimiento económico y comercial'
    },
    {
      img:'/assets/img/Car2/3.jpg',
      titulo: 'Desglosamos las opciones que te pudieran interesar'
    },
    {
      img:'/assets/img/Car2/4.jpg',
      titulo: 'Invirtiendo tu dinero de manera fácil y segura'
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