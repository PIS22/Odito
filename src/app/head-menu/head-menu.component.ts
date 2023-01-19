import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-menu',
  templateUrl: './head-menu.component.html',
  styleUrls: ['./head-menu.component.scss'],
})
export class HeadMenuComponent {
  constructor() {}

  collapse: boolean = true;

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
}
