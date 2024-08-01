import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly router = inject(Router);

  switchLan(lan: string) {
    this.router.navigate([`about/${lan}`]);
  }
}
