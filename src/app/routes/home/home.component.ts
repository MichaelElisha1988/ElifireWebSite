import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

export interface translation {
  artist: string;
  fromWere: string;
  status: string;
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
      status: 'waiting to record',
      nameSong: 'Ля-ля-фа',
    },
    {
      artist: 'Жестокий романс',
      fromWere: 'Facebook - Private Masseges',
      status: 'waiting to record',
      nameSong: 'Любовь - волшебная страна',
    },
    {
      artist: 'Максима Дунаевского',
      fromWere: 'Facebook - comments',
      status: 'starting translation - 12%',
      nameSong: 'Ах этот вечер',
    },
    {
      artist: 'Магомаев',
      fromWere: 'Facebook - comments',
      status: 'starting translation - 9%',
      nameSong: 'Синяя вечность',
    },
    {
      artist: 'Окуджавы',
      fromWere: 'Facebook - comments',
      status: 'panding',
      nameSong: 'Ах война',
    },
    {
      artist: 'Севара',
      fromWere: 'Facebook - comments',
      status: 'Done',
      nameSong: 'Там нет меня',
    },
  ];
}
