import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
      img:'/assets/img/img1.jpg',
      titulo: 'Como funcionamos'  
    },
    {
      img:'assets/img/img1.jpg',
      titulo: 'Registras tu empresa o micronegocio' 
    },
    {
      img:'assets/img/img1.jpg',
      titulo: 'Validamos que todo</br>este en orden' 
    },
    {
      img:'assets/img/img1.jpg',
      titulo: 'con un algoritmo<br>analizamos los negocios<br>que te pudieran interesar' 
    },
  
  ];
}
