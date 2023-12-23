import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckboxDynamicElementComponent } from './form-checkbox-dynamic-element.component';

describe('FormCheckboxDynamicElementComponent', () => {
  let component: FormCheckboxDynamicElementComponent;
  let fixture: ComponentFixture<FormCheckboxDynamicElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCheckboxDynamicElementComponent]
    });
    fixture = TestBed.createComponent(FormCheckboxDynamicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
