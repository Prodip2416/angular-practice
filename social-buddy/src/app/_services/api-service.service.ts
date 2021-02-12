import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  commentsUrl = 'https://jsonplaceholder.typicode.com/posts/';
  randomProfilePicUrl = 'https://randomuser.me/api/?results=5';

  constructor(private httpClient: HttpClient) { }

  getAllPost() {
    return this.httpClient.get(this.postUrl);
  }

  getPost(id: any) {
    return this.httpClient.get(this.postUrl + `/${id}`);
  }

  getCommentsByPostId(id: any) {
    return this.httpClient.get(this.commentsUrl + `${id}/comments`)
  }

  getRandomProfilePic() {
    return this.httpClient.get(this.randomProfilePicUrl);
  }

}
