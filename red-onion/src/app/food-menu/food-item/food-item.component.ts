import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})

export class FoodItemComponent implements OnInit {
  @Input() selectedFoodItem;
  constructor() { }

  ngOnInit(): void {

  }

  AddToCart(data) {
    console.log(data);
  }

}
