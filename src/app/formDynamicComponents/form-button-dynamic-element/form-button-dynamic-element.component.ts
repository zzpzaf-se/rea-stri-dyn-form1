import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'form-button-dynamic-element',
  templateUrl: './form-button-dynamic-element.component.html',
  styleUrls: ['./form-button-dynamic-element.component.css']
})
export class FormButtonDynamicElementComponent {
  fieldConfig: any;
  dfGroup: any;

  @Output() clickEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  
}
