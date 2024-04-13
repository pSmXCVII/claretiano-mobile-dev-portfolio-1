import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
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
} from '@ionic/angular/standalone';

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
  ],
})
export class HomePage {
  seriesList = [
    { id: 1, title: 'Supernatural' },
    { id: 2, title: 'Dr. House' },
    { id: 3, title: 'How I Meet Your Mother' },
    { id: 4, title: 'The Big Bang Theory' },
    { id: 5, title: 'Breaking Bad' },
  ];

  constructor(private toastController: ToastController) {}

  async showClickedItemName(itemName: string) {
    const toast = await this.toastController.create({
      message: `Você clicou na série ${itemName}`,
    });

    toast.present();
  }
}
