import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncripcionesComponent } from './incripciones.component';

describe('IncripcionesComponent', () => {
  let component: IncripcionesComponent;
  let fixture: ComponentFixture<IncripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncripcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
