import {Component} from '@angular/core';
import {PostsService} from '@servicesposts.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts: Observable<any>;

  constructor(private postsService: PostsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: any) => {
      this.posts = this.getPublishedPosts(params.params.lang);
    });
  }

  getPublishedPosts(lang): Observable<any> {
    return this.postsService.getPublishedPosts(lang);
  }
}
