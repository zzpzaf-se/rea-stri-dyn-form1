import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFormHostComponent } from './item-form-host.component';

describe('ItemFormHostComponent', () => {
  let component: ItemFormHostComponent;
  let fixture: ComponentFixture<ItemFormHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemFormHostComponent]
    });
    fixture = TestBed.createComponent(ItemFormHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
