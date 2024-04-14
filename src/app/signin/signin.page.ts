import { Component } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

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
    RouterModule,
  ],
})
export class SigninPage {
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
    private alertController: AlertController,
    private router: Router,
    private authService: AuthService
  ) {}

  async login() {
    if (
      this.authService.login(this.sessionData.user, this.sessionData.password)
    ) {
      this.router.navigate(['/myspace']);
    } else {
      this.showSimpleAlert(
        'Falha na autenticação!',
        'Usuário não encontrado ou senha inválida'
      );
      this.sessionData.password = '';
    }
  }

  async showSimpleAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message,
      buttons: [{ text: 'Fechar', role: 'cancel' }],
    });

    await alert.present();
  }
}
