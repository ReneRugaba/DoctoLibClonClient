import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticiensComponent } from './praticiens.component';

describe('PraticiensComponent', () => {
  let component: PraticiensComponent;
  let fixture: ComponentFixture<PraticiensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticiensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
