import { Component } from '@angular/core';

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
  vertical={
    direction:"vertical",
  };

  horizontal={
    direction:"horizontal",
    loop:true,
  };
}


