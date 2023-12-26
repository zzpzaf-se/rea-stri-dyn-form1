import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { iformField } from '../../dataObjects/iformField';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { iformFieldOptionalItem } from 'src/app/dataObjects/iformFieldOptionalItem';
import { iformFieldValidator } from 'src/app/dataObjects/iformFieldValidator';

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
    this.dynamicFormGroup.valueChanges.subscribe(val => {
      //console.log('>===>> FormContainerComponent - Form Value Changes:', val);
      // *** The following line seems to be 'must' to make the form value changes to be submitted.
         this.dynamicFormGroup.patchValue(val, {emitEvent: false, onlySelf: true});
         this.dynamicFormGroup.markAsDirty();
         console.log('>===>> FormContainerComponent - Form Value Changes:',this.dynamicFormGroup.getRawValue());
        // Show controls errors
        Object.keys(this.dynamicFormGroup.controls).forEach(control => {
          const controlErrors: ValidationErrors = this.dynamicFormGroup.get(control)!.errors!;
          if (controlErrors != null) {
            Object.keys(controlErrors).forEach(keyError => {
              console.log('Form control: ' + control + ', Error key/Name: ' + keyError + ', Error value: ', controlErrors[keyError]);
            });
          }
        });
    });
  }

  public ngOnChanges() {
      console.log('>===>> FormContainerComponent - FormItems:', this.formItems);
      this.initializeFormControls();
  }


  onFormSubmit(event: Event) {
    this.submitted.emit(this.dynamicFormGroup.value);
    // if (this.dynamicFormGroup.valid) {
    //   this.submitted.emit(this.dynamicFormGroup.value);
    // } else {
    //   this.validateAllFormFields(this.dynamicFormGroup);
    // }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control!.markAsTouched({ onlySelf: true });
    });
  }


  // This method is called to create our form (itemFormGroup) by adding the elements/controls via using the fb FormBuilder.
  // It iterates through the itemsFormFieldsSet1 array and adds the form element/control names (formElementControlName) to the form group.
  // After the form group via the is created via the FormBuilder (fb), it is assigned to the itemFormGroup.
  createFornGroup() {
  
    const fbGroup = this.fb.group({});
    this.formItems.forEach((field: iformField) => {
      // The following lines set the initial values of the input form controls. 
       if (field.formElementControlType === 'input' || field.formElementControlType === 'datetime' || field.formElementControlType === 'date' || field.formElementControlType === 'time'  ) {
        if (field.formElementInitialValue === undefined) field.formElementInitialValue = null;
        //fbGroup.addControl(field.formElementControlName!, new FormControl(field.formElementInitialValue));
        fbGroup.addControl(field.formElementControlName!, new FormControl(field.formElementInitialValue, this.bindValidators(field.formElementValidators!)  ));
      } else if (field.formElementControlType === 'select') {
        fbGroup.addControl(field.formElementControlName!, new FormControl(field.formElementValues?.find((item) => item.isItemSelected === true)?.itemKeyName));  
      } else if (field.formElementControlType === 'radiobutton') {
        fbGroup.addControl(field.formElementControlName!, new FormControl(field.formElementValues?.find(item => item.isItemSelected)?.itemKeyName));
      } else if (field.formElementControlType === 'checkbox') {
        fbGroup.addControl(field.formElementControlName!, new FormControl(field.formElementInitialValue));
      }  else if (field.formElementControlType === 'checkboxarray') {
        // createFormArray and add it to the form group
        console.log('>== ***** =>> FormContainerComponent - createFormArray and add it to the form group   ==============', field.formElementValues);
        let checkBoxArray = this.fb.array([]);
        field.formElementValues?.forEach((item: iformFieldOptionalItem) => {
          //checkBoxArray.push(new FormControl(item.isItemSelected ? item.itemValue : ''));
          let frmControl = new FormControl(item.isItemSelected ? true : false);
          // checkBoxArray.push(new FormControl(item.isItemSelected ? true : false));
          checkBoxArray.push(frmControl);
        });
        // console.log('>== ***** =>> FormContainerComponent - createFornGroup() - checkBoxArray', checkBoxArray);
        fbGroup.addControl(field.formElementControlName!, checkBoxArray);   // Here we use the formElementControlName as the formArray name
      
      } else {
        fbGroup.addControl(field.formElementControlName!, new FormControl(""));  
      }

    });
    this.dynamicFormGroup = fbGroup;
    console.log('>== ******* =>> FormContainerComponent - dynamicFormGroup.value', this.dynamicFormGroup.value);
    this.dynamicFormGroup.markAsPristine();
    this.dynamicFormGroup.markAsUntouched();

    this.dynamicFormGroup.updateValueAndValidity();

  }




  // It sets the initial value of the form group (if any). It is called from the ngOnChanges() life cycle hook. 
  initializeFormControls() {  
  
     console.log('>== ++++++ =>> FormContainerComponent - initializeFormControls() - formItems', this.formItems); 
    if (!this.formItems || this.formItems.length <= 0) return;
    if (this.dynamicFormGroup === undefined || this.dynamicFormGroup === null) return;

    const initValObj: { [key: string]: any } = {};
    
    
    this.formItems.forEach((field: iformField) => {
      // console.log('>===>> FormContainerComponent - initializeFormControls() - field', field); 
      if (field.formElementControlType === 'input' || field.formElementControlType === 'datetime' || field.formElementControlType === 'date' || field.formElementControlType === 'time' ) {
        if (field.formElementInitialValue === undefined) field.formElementInitialValue = null;
        initValObj[field.formElementControlName!] = field.formElementInitialValue;
       // console.log('>== |||| =>> FormContainerComponent - initializeFormControls() - input', field.formElementInitialValue);
      } else if (field.formElementControlType === 'select') {
        initValObj[field.formElementControlName!] = field.formElementValues?.find((item) => item.isItemSelected === true)?.itemKeyName || null;
        // initValObj[field.formElementControlName!] = field.formElementValues?.find((item) => item.valuePreselected === true)?.valueKey || null;
      } else if (field.formElementControlType === 'radiobutton') {
        initValObj[field.formElementControlName!] = field.formElementValues?.find(item => item.isItemSelected)?.itemKeyName;  
      } else if (field.formElementControlType === 'checkbox') {
        initValObj[field.formElementControlName!] = field.formElementInitialValue === 'true' ? true : false;
      } else if (field.formElementControlType === 'checkboxarray') {
        // Here we  wiil assign checked/unchecked values to the formArray, according to the values fetced from the backend.
        // Untill now we don't have such a design in the backend, so we don't do ti now.
        // Generally we can do that in a similar manner as in the createFornGroup() method. 
        initValObj[field.formElementControlName!]= [false, false, false, false]
      } else {
        initValObj[field.formElementControlName!] = "";
      }

    });

    // It seems that it would be better to use patchValue for each form control instead of using the setValue for the whole form group.
    // This is mainly, because the setValue method requires all the form controls to be set, otherwise it will throw an error.
    console.log('>===>> FormContainerComponent - initializeFormControls() - initValObj', initValObj);
    if (initValObj === undefined || initValObj === null) return;
    this.dynamicFormGroup.setValue(initValObj);
    //this.dynamicFormGroup.markAsDirty();
    this.dynamicFormGroup.markAsPristine();
    this.dynamicFormGroup.markAsUntouched();
    
  }




  // This method is called to bind the validators to the form controls.
  bindValidators(validators: iformFieldValidator[]) {
    if (!validators || validators.length <= 0) return [];
    //console.log('>===>> FormContainerComponent - bindValidators() - validators', validators);
    const validList: any[] = [];
    validators.forEach((vdtr) => {
      //console.log('>== ||||| =>> FormContainerComponent - bindValidators() - valds', vdtr);
      validList.push(vdtr.validator);
    });
    console.log('>== ||||| =>> FormContainerComponent - bindValidators() - validList', validList);
    //let valds = Validators.compose(validList);
    //return valds;
    return Validators.compose(validList);
  }


}
