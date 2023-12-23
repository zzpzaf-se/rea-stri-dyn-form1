import { iformFieldOptionalValue } from './iformFieldOptionalValue';
import { iformFieldValidator } from './iformFieldValidator';

export type standardInputType =
  | 'color'
  | 'checkbox'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'search'
  | 'tel'
  | 'text'
  | 'submit'
  | 'time'
  | 'url'
  | 'week';

export type dynElementType =
  | 'input'
  | 'select'
  | 'date'
  | 'datetime'
  | 'time'
  | 'checkbox'
  | 'radiobutton'
  | 'button';

export interface iformField {
  [key: string]: any; // index signature
  tableName?: string;
  tableColumnName?: string;
  tableColumnType?: string;
  tableColumnDescription?: string;
  formElenentOrder?: number;
  formElementIsActive?: boolean;
  formElementControlName: string;
  formElementControlType: dynElementType;
  formElementIsEditable?: boolean;
  formElementInputType?: standardInputType;
  //   formElementInputType?: string;
  formElementLabel: string;
  formElementPlaceHolder?: string;
  formElementInitialValue?: any;
  formElementValidators?: iformFieldValidator[];
  formElementValues?: iformFieldOptionalValue[];
}
