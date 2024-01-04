import { Component } from '@angular/core';
import { MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { MtxCalendarView, MtxDatetimepickerMode, MtxDatetimepickerType } from '@ng-matero/extensions/datetimepicker';

@Component({
  selector: 'form-datetime-dynamic-element',
  templateUrl: './form-datetime-dynamic-element.component.html',
  styleUrls: ['./form-datetime-dynamic-element.component.css'],
  providers: [
    // {
    //   provide: DateAdapter, 
    //   useClass: NativeDateAdapter,
    // },
    {
      provide: MTX_DATETIME_FORMATS,
      useValue: {
        parse: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          timeInput: 'HH:mm',
          datetimeInput: 'YYYY-MM-DD HH:mm',
        },
        display: {
          dateInput: 'YYYY-MM-DD',
          monthInput: 'MMMM',
          timeInput: 'HH:mm:ss',
          datetimeInput: 'YYYY-MM-DD HH:mm',
          monthYearLabel: 'YYYY MMMM',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
          popupHeaderDateLabel: 'MMM DD, ddd',
        },
      },
    },
  ],
})
export class FormDatetimeDynamicElementComponent {
  fieldConfig: any;
  dfGroup: any;

  constructor() {}
  mtxType!: MtxDatetimepickerType;
  mtxMode: MtxDatetimepickerMode = 'auto';
  mtxStartView: MtxCalendarView = 'month';

  ngOnInit() {
    if (this.fieldConfig.formElementInputType == 'datetime-local') {
      this.mtxType = 'datetime';
    } else if (this.fieldConfig.formElementInputType == 'date') {  
      this.mtxType = 'date'; 
    } else if (this.fieldConfig.formElementInputType == 'time') {
      this.mtxType = 'time';
    } 
    console.log('    >=====>> mtxType: ',this.mtxType);

  } 

}

