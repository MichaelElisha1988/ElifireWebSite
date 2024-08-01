import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss',
})
export class SongsComponent {
  min() {
    throw new Error('Method not implemented.');
  }
  ActiveIframe: number = 0;
  isMobile: boolean = false;
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
