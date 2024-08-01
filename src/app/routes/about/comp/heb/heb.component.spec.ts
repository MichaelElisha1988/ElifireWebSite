import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebComponent } from './heb.component';

describe('HebComponent', () => {
  let component: HebComponent;
  let fixture: ComponentFixture<HebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
