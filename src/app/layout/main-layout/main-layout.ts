import { Component, signal } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { RouterOutlet } from "@angular/router";
import { Header } from '../header/header';

@Component({
  selector: 'app-main-layout',
  imports: [Sidebar, RouterOutlet, Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  menuOuvert = signal(false);

  basculerMenu() {
    this.menuOuvert.update((ouvert) => !ouvert);
  }

  fermerMenu() {
    this.menuOuvert.set(false);
  }
}
