import { Component } from '@angular/core';
import { iformField } from '../dataObjects/iformField';
import { ItemsTableFormFields } from '../dataObjects/itemFormFields';

@Component({
  selector: 'item-form-host',
  templateUrl: './item-form-host.component.html',
  styleUrls: ['./item-form-host.component.css'],
})
export class ItemFormHostComponent {
  // This is the array of table column names that will be used to dynamically generate the form.
  activeFieldColumnNames: string[] = ['itemName', 'itemDescription'];
  // This is the array of the selected form fields that will be used to dynamically generate the form.
  itemsFormFieldsSet1: iformField[] = [];

  ngOnInit() {
    this.prepareItemsFormFields();
  }

  public dynFormSubmitted(formValue: any) {
    console.log('dynFormSubmitted', formValue);
  }

  // This method is called to select valid fields and build the array of fields to be used here (itemsFormFieldsSet1).
  prepareItemsFormFields(): void {
    ItemsTableFormFields.forEach((field: iformField) => {
      if (this.activeFieldColumnNames.includes(field.tableColumnName!)) {
        field.formElementIsActive = true;
        this.itemsFormFieldsSet1.push(field);
      }
    });

    // Here we add a button item
    this.itemsFormFieldsSet1.push({
      formElementIsActive: true,
      formElementLabel: 'Commit',
      formElementControlName: 'submit-ßbutton',
      formElenentOrder: 3,
      formElementPlaceHolder: '',
      formElementInputType: 'submit',
      formElementControlType: 'button',
    });
  }
}
