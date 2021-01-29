import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticienComponent } from './praticien.component';

describe('PraticienComponent', () => {
  let component: PraticienComponent;
  let fixture: ComponentFixture<PraticienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
