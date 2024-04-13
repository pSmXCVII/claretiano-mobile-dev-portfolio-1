import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  AlertController,
  IonText,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonText,
    IonItem,
    IonLabel,
    IonInput,
  ],
})
export class SignupPage {
  userData = {
    email: '',
    phone: '',
  };

  constructor(private alertController: AlertController) {}

  async onSubmit(data: { email: string; phone: string }) {
    this.userData.email = data?.email;
    this.userData.phone = data?.phone;
    console.log(this.userData);
  }

  async showForm() {
    const alert = await this.alertController.create({
      buttons: [
        { id: 'cancel', text: 'Cancelar', role: 'cancel' },
        {
          id: 'confirm',
          text: 'Confirmar',
          handler: (test) => this.onSubmit(test),
        },
      ],
      header: 'Preencha os dados a seguir para se inscrever',
      inputs: [
        {
          id: 'email',
          label: 'E-mail',
          name: 'email',
          type: 'email',
          placeholder: 'E-mail',
          value: this.userData.email,
        },
        {
          id: 'phone',
          label: 'Telefone',
          name: 'phone',
          type: 'tel',
          placeholder: 'Telefone',
          value: this.userData.phone,
        },
      ],
    });

    alert.present();
  }
}
