import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton,
  IonButtons,
  IonIcon,
} from '@ionic/angular/standalone';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.page.html',
  styleUrls: ['./myspace.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardContent,
    IonButton,
    IonButtons,
    IonIcon,
  ],
})
export class MyspacePage implements OnInit {
  user: string = this.authService.getLoggedUser() || '';

  constructor(protected authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated({ pathWhenUnauthenticated: '/signin' });
  }
}
