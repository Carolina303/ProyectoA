import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  constructor(public navCtrl: NavController, public alerta:AlertController) { }

  ngOnInit() {
  }

  async alertaBasica(){
    let miAlerta = this.alerta.create({
      message: 'Nos pondremos en contacto contigo, tu inversion ha sido generada',
      buttons: ['OK']
    });
 
    (await miAlerta).present();
  }

  async alertBasic(){
    let miAlerta = this.alerta.create({
      header: 'Si inviertes $25,000',
      subHeader:'recibirás',
      message :'$875 de intereses cada 3 meses y $25,000 de tu inversion al finalizar el plazo',
      buttons: ['OK']
    });
 
    (await miAlerta).present();
  }

}
