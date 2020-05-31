import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registroempresa',
  templateUrl: './registroempresa.page.html',
  styleUrls: ['./registroempresa.page.scss'],
})
export class RegistroempresaPage implements OnInit {

  constructor(public navCtrl: NavController, public alerta:AlertController) { }

  ngOnInit() {
  }

  async alertaBasica(){
    let miAlerta = this.alerta.create({
      message: 'El registro de su empresa ha sido exitoso',
      buttons: ['OK']
    });
 
    (await miAlerta).present();
  }
}



