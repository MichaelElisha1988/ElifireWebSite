import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

export interface translation {
  artist: string;
  fromWere: string;
  nameSong: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly router = inject(Router);

  navTo(route: string) {
    this.router.navigate([route]);
  }

  translationsSongList: translation[] = [
    {
      artist: 'Анжелика Варум',
      fromWere: 'Direct Mail - Contact Me',
      nameSong: 'Ля-ля-фа',
    },
    {
      artist: 'Севара',
      fromWere: 'Facebook - comments',
      nameSong: 'Там нет меня',
    },
    {
      artist: 'Жестокий романс',
      fromWere: 'Facebook - Private Masseges',
      nameSong: 'Любовь - волшебная страна',
    },
  ];
}
