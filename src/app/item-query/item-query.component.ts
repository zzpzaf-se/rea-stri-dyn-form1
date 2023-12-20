import { Component } from '@angular/core';
import { IItem } from '../dataObjects/iitem';
import { ItemsDataService } from '../items-data.service';
import { ICategory } from '../dataObjects/icatecory';
import { iformFieldOptionalValue } from '../dataObjects/iformFieldOptionalValue';

@Component({
  selector: 'item-query',
  templateUrl: './item-query.component.html',
  styleUrls: ['./item-query.component.css'],
})
export class ItemQueryComponent {
  
  constructor(private itemsServise: ItemsDataService) {}
  
  queryItemId: any;
  item!:IItem;
  itemCategories!: iformFieldOptionalValue[];


  getItemId(id: any) {

    this.queryItemId = <number> id;
    this.fetchItem(this.queryItemId);
    // console.log('>===>> ItemQueryComponent - fetchItem() - ', this.item);
    this.fetchItemCategories();

  }

  // Get an Utem by id
  fetchItem(id:number) {
    if (id === undefined || id === null) {
      return;
    }
    //console.log('ItemQueryComponent - fetchItem() - ', id);
    return this.itemsServise.getItem(id).subscribe((data: any) => {
      this.item = data;
      console.log('>===>> ItemQueryComponent - fetchItem() - ', this.item);

    });
  }


    // Fetch all Categories and create an array of iformFieldOptionalValue objects 
    fetchItemCategories() {
      if (this.queryItemId === undefined || this.queryItemId === null) {
        return;
      }

      const catOptionValues: iformFieldOptionalValue[] = [];
      let i = 0;      
      return this.itemsServise.getCategories().subscribe((cattegories: ICategory[]) => {
        cattegories.forEach((cattegory: ICategory) => {
          i++;
          catOptionValues.push({valueOrder: i, valueKey: cattegory.categoryId, value: cattegory.categoryName});
        });
        console.log('>===>> ItemQueryComponent - fetchItemCategories - catOptionValues', catOptionValues);
        this.itemCategories = catOptionValues;
      });
    }



}
