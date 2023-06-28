import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisiePersoneComponent } from './saisie-persone.component';

describe('SaisiePersoneComponent', () => {
  let component: SaisiePersoneComponent;
  let fixture: ComponentFixture<SaisiePersoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaisiePersoneComponent]
    });
    fixture = TestBed.createComponent(SaisiePersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
