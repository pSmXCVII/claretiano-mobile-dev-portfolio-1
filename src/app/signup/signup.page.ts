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
  IonItem,
  IonInput,
  IonButtons,
  IonIcon,
  IonMenu,
  IonMenuButton,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

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
    IonItem,
    IonInput,
    IonButtons,
    IonIcon,
    IonMenu,
    IonMenuButton,
  ],
})
export class SignupPage {
  userData = {
    email: '',
    phone: '',
  };

  constructor(
    protected router: Router,
    private alertController: AlertController
  ) {}

  async onSubmit(data: { email: string; phone: string }) {
    this.userData.email = data?.email;
    this.userData.phone = data?.phone;
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
      backdropDismiss: false,
    });

    alert.present();
  }
}
