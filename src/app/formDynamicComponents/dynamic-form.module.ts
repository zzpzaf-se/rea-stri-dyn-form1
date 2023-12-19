import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from './form-container/form-container.component';
import { DynFormElementDirective } from './dyn-form-element.directive';
import { FormInputDynamicElementComponent } from './form-input-dynamic-element/form-input-dynamic-element.component';
import { FormButtonDynamicElementComponent } from './form-button-dynamic-element/form-button-dynamic-element.component';
import { FormSelectDynamicElementComponent } from './form-select-dynamic-element/form-select-dynamic-element.component';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule
    ],
    declarations: [FormContainerComponent, 
                   DynFormElementDirective,
                   FormInputDynamicElementComponent,
                   FormButtonDynamicElementComponent,
                   FormSelectDynamicElementComponent,
    ],
    exports: [FormContainerComponent],
})
export class DynamicFormModule {}