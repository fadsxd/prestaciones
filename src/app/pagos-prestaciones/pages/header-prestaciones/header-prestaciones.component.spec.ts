import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrestacionesComponent } from './header-prestaciones.component';

describe('HeaderPrestacionesComponent', () => {
  let component: HeaderPrestacionesComponent;
  let fixture: ComponentFixture<HeaderPrestacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPrestacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
