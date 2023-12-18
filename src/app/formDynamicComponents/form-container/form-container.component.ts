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


  public ngOnChanges() {

      console.log('>===>> FormContainerComponent - FormItems:', this.formItems);
      // if (!this.formItems || this.formItems.length <= 0) return;
      this.initializeFormFieldControls();

      // Subscribing to the form value changes, works OK. 
      // We can continuously 'listen to' the form value changes
      this.dynamicFormGroup.valueChanges.subscribe(val => {
        //console.log('>===>> FormContainerComponent - Form Value Changes:', val);
        // *** The following line seems to be 'must' to make the form value changes to be submitted.
           //this.dynamicFormGroup.patchValue(val, {emitEvent: false, onlySelf: true});
      });
      //this.dynamicFormGroup.markAsDirty();
  }


  onFormSubmit(event: Event) {
    // this.dynamicFormGroup.markAsDirty();
    //event.preventDefault();
    //event.stopPropagation();
    //console.log('>===>> FormContainerComponent - Form Submitted:', this.dynamicFormGroup.value);
    //console.log('>===>> FormContainerComponent - Form Submitted:', this.dynamicFormGroup.value);
    //this.submitted.emit(this.dynamicFormGroup.getRawValue());
    this.submitted.emit(this.dynamicFormGroup.value);
  }







  // This method is called to initialize our form (itemFormGroup) by adding the elements/controls via using the fb FormBuilder.
  // It iterates through the itemsFormFieldsSet1 array and adds the form element/control names (formElementControlName) to the form group.
  // After the form group via the is created via the FormBuilder (fb), it is assigned to the itemFormGroup.
  initializeFormFieldControls() {
  
    //console.log('>===>> FormContainerComponent - formItems', this.formItems);
    const fbGroup = this.fb.group({});
    this.formItems.forEach((field: iformField) => {
      // fbGroup.addControl(
      //   field.formElementControlName!,
      //   new FormControl('', this.bindValidators(field.formElementValidators!))
      // );
    
      //console.log('>===>> FormContainerComponent - field name:', field.formElementControlName);
      //fbGroup.addControl(field.formElementControlName!, new FormControl(""));

      // The following line sets the initial value of the form control. However, note that initial values (if the remain intact/the same/unchanged): 
      // are not emitted by the form valueChanges observable
      // if other fields are changed, and the form is submitted, the initial values are not included in the form value (only changed values are submitted).
      fbGroup.addControl(field.formElementControlName!, new FormControl(field.formElementInitialValue));

      // Alternatively, we can set empty initial values and then patch the initial values to the form controls.
      // fbGroup.addControl(field.formElementControlName!, new FormControl(""));


    });
    this.dynamicFormGroup = fbGroup;
    //this.dynamicFormGroup.markAsDirty();
    
    // // Patching the initial values to the form controls.
    // this.formItems.forEach((field: iformField) => {
    //   // let control = this.dynamicFormGroup.get(field.formElementControlName!);
    //   // if (control) {
    //   //   control.patchValue(field.formElementInitialValue);
    //   // }
    //   this.dynamicFormGroup.get(field.formElementControlName!)?.patchValue(field.formElementInitialValue);
    // });

    // // The following line sets the initial value of the form group. However, note that initial values (if the remain intact/the same/unchanged):
    // const initValObj: { [key: string]: any } = {}
    // this.formItems.forEach((field: iformField) => {
    //   if (field.formElementInitialValue === undefined) field.formElementInitialValue = null;
    //   initValObj[field.formElementControlName!] = field.formElementInitialValue;
    // });
    // console.log('>===>> FormContainerComponent - initValObj', initValObj);
    // this.dynamicFormGroup.setValue(initValObj);
    // this.dynamicFormGroup.markAsDirty();


    console.log('>===>> FormContainerComponent - dynamicFormGroup.value', this.dynamicFormGroup.value);

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
