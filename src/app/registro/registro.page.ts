import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public navCtrl: NavController, public alerta:AlertController) { }
 
  ngOnInit() {
  }
  async alertaBasica(){
    let miAlerta = this.alerta.create({
      message: 'Su registro fue exitoso',
      buttons: ['OK']
    });
 
    (await miAlerta).present();
  }
}

 