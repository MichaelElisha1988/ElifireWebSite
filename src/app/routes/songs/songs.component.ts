import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss',
})
export class SongsComponent {
  private readonly router = inject(Router);

  navTo(route: string) {
    this.router.navigate([route]);
  }

  ActiveIframe: number = 0;
  isMobile: boolean = false;
  listOfIframeId: string[] = [
    'Temse6ZxtRg',
    'zq7OFWB9Na8',
    'iOFEfpcvahM',
    'rfxMXhknN8U',
    'BBOc5yn07gk',
    'wSNkMoenCAU',
    'MUUmj7hc5Sc',
    'Mur0znEB7RQ',
    'ueVfEK9AjW4',
    'zGijUgvL-xM',
    'wlPb5GbBT4o',
    'nJYz3vegWkc',
    'p1HPis8eTB4',
    'aZ65DBnD-Ec',
    'Vqsq0HA3Y_w',
    '2WujK2LcV4I',
  ];
  listOfActiveIframe: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  constructor() {
    this.listOfActiveIframe[this.ActiveIframe] = true;
    this.isMobile = window.innerWidth < 640;
  }

  next() {
    this.listOfActiveIframe.fill(false);
    this.ActiveIframe++;
    this.ActiveIframe > this.listOfActiveIframe.length - 1
      ? (this.ActiveIframe = 0)
      : '';

    this.listOfActiveIframe[this.ActiveIframe] = true;
  }
  prev() {
    this.listOfActiveIframe.fill(false);
    this.ActiveIframe--;
    this.ActiveIframe < 0
      ? (this.ActiveIframe = this.listOfActiveIframe.length - 1)
      : '';

    this.listOfActiveIframe[this.ActiveIframe] = true;
  }
}
