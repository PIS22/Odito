import { Component } from '@angular/core';
import { openKkiapayWidget } from 'kkiapay';

@Component({
  selector: 'app-foot-bar',
  templateUrl: './foot-bar.component.html',
  styleUrls: ['./foot-bar.component.scss'],
})
export class FootBarComponent {
  montant: number = 0;
  day = new Date(2023, 5, 30);
  donner() {
    if (this.day < new Date()) alert('hors délai');
    else {
      openKkiapayWidget({
        amount: this.montant,
        api_key: 'f2202ee7235e4f3a05620d329c92bbc4a4dc8a26',
        //sandbox: true,
        phone: '',
      });
    }
  }

  open() {
    if (this.montant > 0) {
      this.donner();
    } else alert('Veuillez entrer le montant du don');
  }
}
