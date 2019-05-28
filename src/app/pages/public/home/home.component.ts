import {Component} from '@angular/core';
import {PostsService} from '@servicesposts.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts: Observable<any>;
  language = 'pl';

  constructor(private postsService: PostsService) {
    this.posts = this.getPublishedPosts(this.language);
  }

  getPublishedPosts(lang): Observable<any> {
    return this.postsService.getPublishedPosts(lang);
  }
}
