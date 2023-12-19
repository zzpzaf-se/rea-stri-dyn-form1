import { Component, Input, SimpleChanges } from '@angular/core';
import { iformField } from '../dataObjects/iformField';
import { ItemsTableFormFields } from '../dataObjects/itemFormFields';
import { IItem } from '../dataObjects/iitem';
import { iformFieldOptionalValue } from '../dataObjects/iformFieldOptionalValue';

@Component({
  selector: 'item-form-host',
  templateUrl: './item-form-host.component.html',
  styleUrls: ['./item-form-host.component.css'],
})
export class ItemFormHostComponent {
  // This is the array of table column names that will be used to dynamically generate the form.
  activeFieldColumnNames: string[] = ['itemName', 'itemDescription'];
  
  // This is the item object fetched from backend by the item-query component.  
  @Input()
  public fetchedItem!: IItem;

  
  // This is the array of the selected form fields that will be used to dynamically generate the form.
  itemsFormFieldsSet1: iformField[] = [];

  // A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  ngOnInit() {
    console.log(">===>> ItemFormHostComponent - ngOnInit() - this.fetchedItem", this.fetchedItem);
    this.prepareItemsFormFields();
  }



  // A lifecycle hook that is called when any data-bound property of a directive changes.
  // Called before ngOnInit() (if the component has bound inputs) 
  // and whenever one or more data-bound input properties change.
  // This happens frequently, so any operation you perform here impacts performance significantly.
  public ngOnChanges(changes: SimpleChanges) : void { 

    // console.log(">===>> changes", changes);
    for (const chPropName in changes) { 
      //console.log(">===>> chPropName", chPropName);
      if (chPropName === 'fetchedItem') {
        //console.log(">===>> changes[chPropName]", changes[chPropName]);
        if (changes[chPropName].currentValue === undefined || changes[chPropName].currentValue === null) {
          return;
        }
        this.fetchedItem = changes[chPropName].currentValue;
        console.log(">===>> ItemFormHostComponent - ngOnChanges() - this.fetchedItem", this.fetchedItem);
        this.prepareItemsFormFields();
      }
    }



  }

  public dynFormSubmitted(formValue: any) {
    console.log('>===>> ItemFormHostComponent - dynFormSubmitted', formValue);
  }

  // This method is called to select valid fields and build the array of fields to be used here (itemsFormFieldsSet1).
  prepareItemsFormFields(): void {
    // if (this.fetchedItem === undefined) {
    //   return;
    // }
    this.itemsFormFieldsSet1 = [];
    ItemsTableFormFields.forEach((field: iformField) => {
      if (this.activeFieldColumnNames.includes(field.tableColumnName!)) {
        field.formElementIsActive = true;
        if (field.formElementControlType === 'input') {
          if (this.fetchedItem !== undefined && this.fetchedItem !== null ) {
            field.formElementInitialValue = this.fetchedItem[field.tableColumnName!];
            console.log('>===>> ItemFormHostComponent - field.formElementInitialValue', field.tableColumnName!, ":", field.formElementInitialValue);
          }
        }
        this.itemsFormFieldsSet1.push(field);
      }
    });

    //console.log('>===>> ItemFormHostComponent - itemsFormFieldsSet1', this.itemsFormFieldsSet1);


    // Here we add a select item

    let optionsArray: iformFieldOptionalValue[] = [
      { valueOrder: 1, valueKey: 101, value: 'Category 1' },
      { valueOrder: 2, valueKey: 102, value: 'Category 2' },
      { valueOrder: 3, valueKey: 103, value: 'Category 3' }
    ];

    this.itemsFormFieldsSet1.push({
      formElementIsActive: true,
      formElementLabel: 'Select Item Category',
      formElementControlName: 'category',
      formElenentOrder: 3,
      formElementPlaceHolder: 'Select Category',
      formElementControlType: 'select',
      formElementValues: optionsArray,
    });


    // Here we add a button item
    this.itemsFormFieldsSet1.push({
      formElementIsActive: true,
      formElementLabel: 'Commit',
      formElementControlName: 'submit-button',
      formElenentOrder: 4,
      formElementPlaceHolder: '',
      formElementInputType: 'submit',
      formElementControlType: 'button',
    });
  }
}
