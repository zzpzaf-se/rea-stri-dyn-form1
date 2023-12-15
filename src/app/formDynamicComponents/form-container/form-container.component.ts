import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { iformField } from '../../dataObjects/iformField';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css'],
})
export class FormContainerComponent implements OnInit {
  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  dynamicFormGroup!: FormGroup;

  // This is the array of the form fields, that will be used to create the form,
  // and it is obtained from the parent ItemFormHostComponent (item-form-host).
  @Input()
  public formItems: iformField[] = [];

  public ngOnInit() {
    this.initializeFormFieldControls();
  }

  // This method is called to initialize our form (itemFormGroup) by adding the elements/controls via using the fb FormBuilder.
  // It iterates through the itemsFormFieldsSet1 array and adds the form element/control names (formElementControlName) to the form group.
  // After the form group via the is created via the FormBuilder (fb), it is assigned to the itemFormGroup.
  initializeFormFieldControls() {
    const fbGroup = this.fb.group({});
    this.formItems.forEach((field) => {
      // fbGroup.addControl(
      //   field.formElementControlName!,
      //   new FormControl('', this.bindValidators(field.formElementValidators!))
      // );
      fbGroup.addControl(field.formElementControlName!, new FormControl(''));
    });
    this.dynamicFormGroup = fbGroup;
  }

  // This method is called to bind the validators to the form controls.
  bindValidators(validators: any[]) {
    if (!validators || validators.length <= 0) return null;
    const validList: any[] = [];
    validators.forEach((validator) => {
      validList.push(eval(validator.validator));
    });
    return Validators.compose(validList);
  }
}
