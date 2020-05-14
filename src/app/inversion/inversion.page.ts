import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inversion',
  templateUrl: './inversion.page.html',
  styleUrls: ['./inversion.page.scss'],
})
export class InversionPage implements OnInit {
  list = {
    name:"",
    img:""
  }

  constructor(  private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.list.name=this.activatedRoute.snapshot.paramMap.get('name');
    this.list.img=this.activatedRoute.snapshot.paramMap.get('img');
  }
 
}
