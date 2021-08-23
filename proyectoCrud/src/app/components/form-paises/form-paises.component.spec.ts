import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPaisesComponent } from './form-paises.component';

describe('FormPaisesComponent', () => {
  let component: FormPaisesComponent;
  let fixture: ComponentFixture<FormPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
