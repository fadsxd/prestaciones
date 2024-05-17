import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevengoPageComponent } from './devengo-page.component';

describe('DevengoPageComponent', () => {
  let component: DevengoPageComponent;
  let fixture: ComponentFixture<DevengoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevengoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevengoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
