import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-support-artist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './support-artist.component.html',
  styleUrl: './support-artist.component.scss',
})
export class SupportArtistComponent {
  readonly isMobile = window.innerWidth < 640;
}
