import {Component} from '@angular/core';
import {PostsService} from '@servicesposts.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts: Array<any>;

  constructor(private postsService: PostsService) {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe(res => (this.posts = res));
  }
}
