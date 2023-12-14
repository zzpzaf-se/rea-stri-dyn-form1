import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'form-input-dynamic-element',
  templateUrl: './form-input-dynamic-element.component.html',
  styleUrls: ['./form-input-dynamic-element.component.css'],
})
export class FormInputDynamicElementComponent {
  fieldConfig: any;
  dfGroup: any;

  constructor() {}

  // constructor(public cd: ChangeDetectorRef) {}

  // public ngAfterContentInit() {
  //   this.cd.detectChanges();
  // }

}
