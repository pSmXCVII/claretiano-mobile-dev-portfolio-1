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
  IonFooter,
  IonButtons,
  IonIcon,
  IonMenu,
  IonMenuButton,
} from '@ionic/angular/standalone';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
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
    IonFooter,
    IonButtons,
    IonIcon,
    IonMenu,
    IonMenuButton,
  ],
})
export class SigninPage implements OnInit {
  sessionData = {
    user: '',
    password: '',
  };

  availableUserList = [
    { id: 1, user: 'patrick', password: 'patrick123' },
    { id: 2, user: 'joao', password: 'joao123' },
    { id: 3, user: 'maria', password: 'maria123' },
  ];

  constructor(
    protected router: Router,
    private alertController: AlertController,
    private authService: AuthService
  ) {}

  async login() {
    const loginResponseError = this.authService.login(
      this.sessionData.user,
      this.sessionData.password
    );

    if (loginResponseError) {
      this.showSimpleAlert('Falha na autenticação!', loginResponseError);
    }
    this.sessionData.password = '';
  }

  async showSimpleAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message,
      buttons: [{ text: 'Fechar', role: 'cancel' }],
    });

    await alert.present();
  }

  ngOnInit() {
    this.authService.isAuthenticated({ pathWhenAuthenticated: '/myspace' });
  }
}
