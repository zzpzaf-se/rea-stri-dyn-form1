import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputDynamicElementComponent } from './form-input-dynamic-element.component';

describe('FormInputDynamicElementComponent', () => {
  let component: FormInputDynamicElementComponent;
  let fixture: ComponentFixture<FormInputDynamicElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInputDynamicElementComponent]
    });
    fixture = TestBed.createComponent(FormInputDynamicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
