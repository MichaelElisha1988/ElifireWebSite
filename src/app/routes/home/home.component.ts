import { Component } from '@angular/core';

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
