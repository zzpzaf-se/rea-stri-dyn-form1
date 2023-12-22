import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadiobuttonDynamicElementComponent } from './form-radiobutton-dynamic-element.component';

describe('FormRadiobuttonDynamicElementComponent', () => {
  let component: FormRadiobuttonDynamicElementComponent;
  let fixture: ComponentFixture<FormRadiobuttonDynamicElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRadiobuttonDynamicElementComponent]
    });
    fixture = TestBed.createComponent(FormRadiobuttonDynamicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
