import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';

export interface SiteRoutes {
  title: string;
  route: string;
  isActive: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly router = inject(Router);

  listOfRoutes: SiteRoutes[] = [
    {
      title: 'home',
      route: 'home',
      isActive: false,
    },
    {
      title: 'songs',
      route: 'songs',
      isActive: false,
    },
    // {
    //   title: 'translations',
    //   route: 'translations',
    //   isActive: false,
    // },
    {
      title: 'about',
      route: 'about',
      isActive: false,
    },
    {
      title: 'support artist',
      route: 'support-artist',
      isActive: false,
    },
    {
      title: 'contact me',
      route: 'contact-me',
      isActive: false,
    },
  ];

  constructor() {
    this.activateHeader();
  }

  onNav(item: SiteRoutes) {
    this.listOfRoutes.map((route) => {
      route.isActive = false;
    });
    this.activateHeader(item.route);
    this.router.navigate([item.route]);
  }

  activateHeader(route?: string) {
    let activeHeader = route ? route : location.pathname.replace('/', '');
    this.listOfRoutes.map((route) => {
      route.route == activeHeader ? (route.isActive = true) : '';
    });
  }
}
