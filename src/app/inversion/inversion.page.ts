import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inversion',
  templateUrl: './inversion.page.html',
  styleUrls: ['./inversion.page.scss'],
})
export class InversionPage implements OnInit {
  params={
    id:null,
    category:null
  };
 
  companys={
    id:"",
    category:"",
    name:"",
    img:"",
    text:""
  }
  constructor(  private activatedRoute: ActivatedRoute ) { }

  ngOnInit(){
    this.params.category=this.activatedRoute.snapshot.paramMap.get('category');
    this.params.id=this.activatedRoute.snapshot.paramMap.get('id');

    var dir="./assets/data/"+this.params.category+".json";

    fetch(dir).then(res => res.json()).then(json => {

      this.companys=json[this.params.id-1];
      
    });
  }

}
