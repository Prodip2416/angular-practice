import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodDetailsComponent } from './food-item/food-details/food-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuBarComponent, FoodItemComponent, FoodDetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuBarComponent,
  ]
})
export class FoodMenuModule { }
