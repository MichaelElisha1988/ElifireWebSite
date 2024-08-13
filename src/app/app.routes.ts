import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { SongsComponent } from './routes/songs/songs.component';
import { TranslationsComponent } from './routes/translations/translations.component';
import { AboutComponent } from './routes/about/about.component';
import { SupportArtistComponent } from './routes/support-artist/support-artist.component';
import { EngComponent } from './routes/about/comp/eng/eng.component';
import { HebComponent } from './routes/about/comp/heb/heb.component';
import { RusComponent } from './routes/about/comp/rus/rus.component';
import { ContactUsComponent } from './routes/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'translations', component: TranslationsComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'eng', component: EngComponent, pathMatch: 'full' },
      { path: 'heb', component: HebComponent, pathMatch: 'full' },
      { path: 'rus', component: RusComponent, pathMatch: 'full' },
      { path: '**', redirectTo: 'eng' },
    ],
  },
  {
    path: 'support-artist',
    component: SupportArtistComponent,
  },
  {
    path: 'contact-me',
    component: ContactUsComponent,
  },
  { path: '**', redirectTo: '' },
];
