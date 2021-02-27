import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FoodItemComponent } from './food-item/food-item.component';


@NgModule({
  declarations: [MenuBarComponent, FoodItemComponent],
  imports: [
    CommonModule 
  ],
  exports:[
    MenuBarComponent,
  ]
})
export class FoodMenuModule { }
