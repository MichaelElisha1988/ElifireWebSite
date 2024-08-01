import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/commponents/header/header.component';
import { FooterComponent } from './shared/commponents/footer/footer.component';
import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ElifireWebSite';
}
