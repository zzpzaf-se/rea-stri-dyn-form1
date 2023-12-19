import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { iformField } from '../../dataObjects/iformField';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css'],
})
export class FormContainerComponent  {

  // This is the array of the form fields, that will be used to create the form,
  // and it is obtained from the parent ItemFormHostComponent (item-form-host).
  
    
  @Input()
  public formItems!: iformField[];


  // Emits the submitted form value to the parent ItemFormHostComponent (item-form-host).
  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

 // @ViewChild('ngForm') ngForm!: NgForm;
  
  dynamicFormGroup!: FormGroup;

  public ngOnInit() {
    this.createFornGroup();
    // this.dynamicFormGroup.valueChanges.subscribe(val => {
    //   //console.log('>===>> FormContainerComponent - Form Value Changes:', val);
    //   // *** The following line seems to be 'must' to make the form value changes to be submitted.
    //      this.dynamicFormGroup.patchValue(val, {emitEvent: false, onlySelf: true});
    //      this.dynamicFormGroup.markAsDirty();
    //      console.log('>===>> FormContainerComponent - Form Value Changes:',this.dynamicFormGroup.getRawValue());
    // });
  }

  public ngOnChanges() {
      console.log('>===>> FormContainerComponent - FormItems:', this.formItems);
      this.initializeFormControls();
  }


  onFormSubmit(event: Event) {
    this.submitted.emit(this.dynamicFormGroup.value);
  }


  // This method is called to create our form (itemFormGroup) by adding the elements/controls via using the fb FormBuilder.
  // It iterates through the itemsFormFieldsSet1 array and adds the form element/control names (formElementControlName) to the form group.
  // After the form group via the is created via the FormBuilder (fb), it is assigned to the itemFormGroup.
  createFornGroup() {
  
    const fbGroup = this.fb.group({});
    this.formItems.forEach((field: iformField) => {
      // The following lines set the initial values of the input form controls. 
      if (field.formElementControlType === 'input') {
        if (field.formElementInitialValue === undefined) field.formElementInitialValue = null;
        fbGroup.addControl(field.formElementControlName!, new FormControl(field.formElementInitialValue));
      } else {
        fbGroup.addControl(field.formElementControlName!, new FormControl(""));
      }

    });
    this.dynamicFormGroup = fbGroup;
    console.log('>===>> FormContainerComponent - dynamicFormGroup.value', this.dynamicFormGroup.value);

  }




  // It sets the initial value of the form group (if any). It is called from the ngOnChanges() life cycle hook. 
  initializeFormControls() {  
  
     console.log('>===>> FormContainerComponent - initializeFormControls() - formItems', this.formItems); 
    if (!this.formItems || this.formItems.length <= 0) return;
    if (this.dynamicFormGroup === undefined || this.dynamicFormGroup === null) return;

    const initValObj: { [key: string]: any } = {};
    this.formItems.forEach((field: iformField) => {
      if (field.formElementInitialValue === undefined) field.formElementInitialValue = null;
      initValObj[field.formElementControlName!] = field.formElementInitialValue;
    });
    console.log('>===>> FormContainerComponent - initializeFormControls() - initValObj', initValObj);
    if (initValObj === undefined || initValObj === null) return;
    this.dynamicFormGroup.setValue(initValObj);
    this.dynamicFormGroup.markAsDirty();
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
