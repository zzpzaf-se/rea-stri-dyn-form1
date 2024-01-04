import { NgModule } from  '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';


// import {
//   NgxMatDatetimePickerModule,
//   NgxMatNativeDateModule,
//   NgxMatTimepickerModule
// } from '@angular-material-components/datetime-picker';

import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';
import { MtxMomentDatetimeModule } from '@ng-matero/extensions-moment-adapter';

@NgModule({
    imports: [MatButtonModule,
              MatToolbarModule,
              MatNativeDateModule,
              MatDatepickerModule,
              MatIconModule,
              MatCheckboxModule, 
              MatCardModule,
              MatFormFieldModule,
              MatInputModule,
              MatRadioModule,
              MatListModule,
              MatMenuModule,
              MatProgressSpinnerModule,
              MatSidenavModule,
              MatExpansionModule,
              MatListModule,
              MatCardModule,
              MatMenuModule,
              MatIconModule,
              MatButtonModule,
              MatTableModule,
              MatSortModule,
              MatSelectModule,
              // NgxMatDatetimePickerModule,
              // NgxMatTimepickerModule,
              // NgxMatNativeDateModule,
              
              // MtxDatetimepickerModule,
              // MtxNativeDatetimeModule,

             ],
    exports: [MatButtonModule,
              MatToolbarModule,
              MatNativeDateModule,
              MatDatepickerModule,
              MatIconModule,
              MatCheckboxModule, 
              MatCardModule,
              MatFormFieldModule,
              MatInputModule,
              MatRadioModule,
              MatListModule,
              MatMenuModule,
              MatProgressSpinnerModule,
              MatSidenavModule,
              MatExpansionModule,
              MatListModule,
              MatGridListModule,
              MatCardModule,
              MatMenuModule,
              MatIconModule,
              MatButtonModule,
              MatTableModule,
              MatSortModule,
              MatSelectModule,
              // NgxMatDatetimePickerModule,
              // NgxMatTimepickerModule,
              // NgxMatNativeDateModule
              MtxDatetimepickerModule,
              MtxMomentDatetimeModule,
              //MtxNativeDatetimeModule,
              //MatNativeDateModule,
              
            ], 
  //   providers: [
  //   // {
  //   //   provide: DateAdapter, 
  //   //   useClass: NativeDateAdapter,
  //   // },
  //   {
  //     provide: MTX_DATETIME_FORMATS,
  //     useValue: {
  //       parse: {
  //         dateInput: 'YYYY-MM-DD',
  //         monthInput: 'MMMM',
  //         timeInput: 'HH:mm:ss',
  //         datetimeInput: 'YYYY-MM-DD HH:mm:ss',
  //       },
  //       display: {
  //         dateInput: 'YYYY-MM-DD HH:mm:ss',
  //         monthInput: 'MMMM',
  //         timeInput: 'HH:mm:ss',
  //         datetimeInput: 'YYYY-MM-DD HH:mm:ss',
  //         monthYearLabel: 'YYYY MMMM',
  //         dateA11yLabel: 'LL',
  //         monthYearA11yLabel: 'MMMM YYYY',
  //         popupHeaderDateLabel: 'MMM DD, ddd',
  //       },
  //     },
  //   },
  // ],
})

export  class  MaterialModule { }


