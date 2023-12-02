import { Component } from '@angular/core';
import { IItem } from '../iitem';
import { ItemsDataService } from '../items-data.service';

@Component({
  selector: 'item-query',
  templateUrl: './item-query.component.html',
  styleUrls: ['./item-query.component.css'],
})
export class ItemQueryComponent {
  
  constructor(private itemsServise: ItemsDataService) {}
  
  queryItemId: any;
  item!:IItem;


  getItemId(id: any) {

    this.queryItemId = <number> id;
    this.fetchItem(this.queryItemId);

  }

  // Get an Utem by id
  fetchItem(id:number) {
    return this.itemsServise.getItem(id).subscribe((data: any) => {
      this.item = data;
      console.log(this.item);
    });
  }



}
