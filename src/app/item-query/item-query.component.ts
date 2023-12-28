import { Component } from '@angular/core';
import { IItem } from '../dataObjects/iitem';
import { ItemsDataService } from '../items-data.service';
import { ICategory } from '../dataObjects/icatecory';
import { iformFieldOptionalItem } from '../dataObjects/iformFieldOptionalItem';

@Component({
  selector: 'item-query',
  templateUrl: './item-query.component.html',
  styleUrls: ['./item-query.component.css'],
})
export class ItemQueryComponent {
  
  constructor(private itemsServise: ItemsDataService) {}
  
  queryItemId: any;
  item!:IItem;
  itemCategories!: iformFieldOptionalItem[];

  ngOnInit(): void {  
    this.fetchItemCategories();
    console.log('>= oooooo ==>> ItemQueryComponent - ngOnInit() - ', this.itemCategories);
  }

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


    // Fetch all Categories and create an array of iformFieldOptionalItem objects 
    fetchItemCategories() {
      // if (this.queryItemId === undefined || this.queryItemId === null) {
      //   return;
      // }

      const catOptionValues: iformFieldOptionalItem[] = [];
      let i = 0;      
      return this.itemsServise.getCategories().subscribe((cattegories: ICategory[]) => {
        cattegories.forEach((cattegory: ICategory) => {
          i++;
          catOptionValues.push({itemOrder: i, itemKeyName: cattegory.categoryId, itemValue: cattegory.categoryName});
        });
        //console.log('>===>> ItemQueryComponent - fetchItemCategories - catOptionValues', catOptionValues);
        this.itemCategories = catOptionValues;
      });
    }



}
