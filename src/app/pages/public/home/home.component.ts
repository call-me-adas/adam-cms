import {Component} from '@angular/core';
import {PostsService} from '@servicesposts.service';
import {Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts: Observable<any>;

  constructor(private postsService: PostsService, private translate: TranslateService) {
    this.posts = this.getPublishedPosts(translate.currentLang);
  }

  getPublishedPosts(lang): Observable<any> {
    return this.postsService.getPublishedPosts(lang);
  }
}
