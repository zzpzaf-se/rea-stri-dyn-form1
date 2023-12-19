import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectDynamicElementComponent } from './form-select-dynamic-element.component';

describe('FormSelectDynamicElementComponent', () => {
  let component: FormSelectDynamicElementComponent;
  let fixture: ComponentFixture<FormSelectDynamicElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSelectDynamicElementComponent]
    });
    fixture = TestBed.createComponent(FormSelectDynamicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
