import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadMenuComponent } from './head-menu/head-menu.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HeadMenuComponent, FootBarComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
