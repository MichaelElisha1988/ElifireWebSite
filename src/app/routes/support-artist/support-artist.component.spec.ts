import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportArtistComponent } from './support-artist.component';

describe('SupportArtistComponent', () => {
  let component: SupportArtistComponent;
  let fixture: ComponentFixture<SupportArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportArtistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
