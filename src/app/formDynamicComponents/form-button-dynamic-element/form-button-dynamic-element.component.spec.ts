import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormButtonDynamicElementComponent } from './form-button-dynamic-element.component';

describe('FormButtonDynamicElementComponent', () => {
  let component: FormButtonDynamicElementComponent;
  let fixture: ComponentFixture<FormButtonDynamicElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormButtonDynamicElementComponent]
    });
    fixture = TestBed.createComponent(FormButtonDynamicElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
