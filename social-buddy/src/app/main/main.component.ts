import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../_services/api-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  posts: any;
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.apiService.getAllPost().subscribe(result => {
      this.posts = result;
    })
  }
}
