import { Component, OnInit } from '@angular/core';
import { fakeData } from '../../../fakeData/fakeData.js';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  selectedFoodItem: any;
  category = 'BREAKFAST';
  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.selectedFoodItem = fakeData.filter(item => item.category === this.category);
  }

  selectItem(selectCategory) {
    this.category = selectCategory;
    this.selectedFoodItem = fakeData.filter(item => item.category === selectCategory);
  }
}
