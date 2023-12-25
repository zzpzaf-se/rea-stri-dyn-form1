import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckboxgroupDynamicElementComponent } from './form-checkboxgroup-dynamic-element.component';

describe('FormCheckboxgroupDynamicElementComponent', () => {
  let component: FormCheckboxgroupDynamicElementComponent;
  let fixture: ComponentFixture<FormCheckboxgroupDynamicElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCheckboxgroupDynamicElementComponent]
    });
    fixture = TestBed.createComponent(FormCheckboxgroupDynamicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
