import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../../../fakeData/fakeData.js';


@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  foodItem: any;
  constructor(private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.foodItem = fakeData.filter(item => item.id == this.activateRouter.snapshot.params['id'])
  }
}
