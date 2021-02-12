import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../_services/api-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post: any;
  comments: any;
  profilePic: any;

  constructor(private route: ActivatedRoute, private service: ApiServiceService) { }

  ngOnInit(): void {
    this.loadPost();
    this.loadProfilePic();
    this.loadCommentsByPostId();
  }

  loadPost() {
    this.service.getPost(this.route.snapshot.paramMap.get('id')).subscribe(result => {
      this.post = result;
    })
  }
  
  loadCommentsByPostId() {
    this.service.getCommentsByPostId(this.route.snapshot.paramMap.get('id')).subscribe(results => {
      this.comments = results;
    })
  }

  loadProfilePic() {
    this.service.getRandomProfilePic().subscribe(results => {
      this.profilePic = results;
      this.profilePic = this.profilePic.results
     // console.log(this.profilePic)
    })
  }
}
