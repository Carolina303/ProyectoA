import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listempresa',
  templateUrl: './listempresa.page.html',
  styleUrls: ['./listempresa.page.scss'],
})
export class ListempresaPage  {
  category;

  list=[];

  constructor( private activatedRoute: ActivatedRoute ) {

  }
  ngOnInit(){
    this.category=this.activatedRoute.snapshot.paramMap.get('category');

    var dir="./assets/data/"+this.category+".json";

    fetch(dir).then(res => res.json()).then(json => {
      this.list=json;
    });
    }
 
} 


