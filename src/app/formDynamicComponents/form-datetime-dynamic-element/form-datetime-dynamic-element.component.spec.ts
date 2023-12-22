import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatetimeDynamicElementComponent } from './form-datetime-dynamic-element.component';

describe('FormDatetimeDynamicElementComponent', () => {
  let component: FormDatetimeDynamicElementComponent;
  let fixture: ComponentFixture<FormDatetimeDynamicElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDatetimeDynamicElementComponent]
    });
    fixture = TestBed.createComponent(FormDatetimeDynamicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
