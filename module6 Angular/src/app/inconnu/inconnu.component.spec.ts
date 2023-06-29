import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InconnuComponent } from './inconnu.component';

describe('InconnuComponent', () => {
  let component: InconnuComponent;
  let fixture: ComponentFixture<InconnuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InconnuComponent]
    });
    fixture = TestBed.createComponent(InconnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
