import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { fakeData } from '../../../../fakeData/fakeData.js';


@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  foodItem: any;
  cartItem = 0;
  totalItem = {};

  constructor(private activateRouter: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.foodItem = fakeData.filter(item => item.id == this.activateRouter.snapshot.params['id'])
  }
  Increment() {
    this.cartItem = this.cartItem + 1;
  }
  Decrement() {
    if (this.cartItem > 0) {
      this.cartItem = this.cartItem - 1;
    } else {
      this.toastr.error('Item can not less than zero');
    }
  }

  AddToCart() {
    console.log('help');
  }
}
