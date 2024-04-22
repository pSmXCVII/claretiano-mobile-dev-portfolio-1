import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToast,
  IonButton,
  ToastController,
  IonBadge,
  IonIcon,
  IonButtons,
  IonMenu,
  IonMenuButton,
  IonText,
} from '@ionic/angular/standalone';

interface SeriesList {
  id: number;
  title: string;
  stars: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    NgFor,
    IonLabel,
    IonToast,
    IonButton,
    IonBadge,
    IonIcon,
    IonButtons,
    IonMenu,
    IonMenuButton,
    IonText,
  ],
})
export class HomePage {
  seriesList = [
    { id: 1, title: 'Supernatural', stars: '44k' },
    { id: 2, title: 'Dr. House', stars: '41k' },
    { id: 3, title: 'How I Meet Your Mother', stars: '18k' },
    { id: 4, title: 'The Big Bang Theory', stars: '9k' },
    { id: 5, title: 'Breaking Bad', stars: '1.5k' },
  ];

  constructor(
    protected router: Router,
    private toastController: ToastController
  ) {}

  async showClickedItemName(item: SeriesList) {
    const toast = await this.toastController.create({
      message: `Você clicou na série ${item.title} (${item.stars})`,
    });

    toast.present();
  }
}
