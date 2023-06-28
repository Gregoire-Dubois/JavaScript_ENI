import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagePersonnesComponent } from './affichage-personnes.component';

describe('AffichagePersonnesComponent', () => {
  let component: AffichagePersonnesComponent;
  let fixture: ComponentFixture<AffichagePersonnesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffichagePersonnesComponent]
    });
    fixture = TestBed.createComponent(AffichagePersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
