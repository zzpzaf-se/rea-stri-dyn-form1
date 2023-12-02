import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  appHeaderTitle: string = "Reactive, Strictly-Typed, and Dynamic Form Demo"
  myInfo:string = "(C) 2023 Panos Zafeiropoulos"
}
