// This interface can serve as both the type of each option of a select form control
// and the type of each item for a formArray dynamic control, e.g.: a checkbox array form control.
export interface iformFieldOptionalItem {
    itemOrder?: number;
    itemText?: string;              // it can be the label text
    itemKeyName: number | string;   // It will be the control name and/or the value of the attribute 'name'
    itemValue: any;                 // It will be the value of the attribute 'value'   
    isItemSelected?: boolean;       // It can be the value of the attribute 'checked'
}