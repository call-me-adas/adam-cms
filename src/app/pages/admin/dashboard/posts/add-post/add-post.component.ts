import {Component} from '@angular/core';
import {PostsService} from '@services/posts.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'page-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  ckeConfig: any;
  defaultContent: any;
  errorMessage;
  successMessage;

  constructor(private postsService: PostsService) {
    this.ckeConfig = environment.ckeConfig;
    this.defaultContent = environment.defaultCkeContent;
  }

  send() {
    this.postsService.addNewPost({body: this.defaultContent})
      .then(data => {
        this.successMessage = data.msg;
        setTimeout(() => {this.successMessage = ''; }, 2500);
      }).catch(err => {
      this.errorMessage = err.msg;
      setTimeout(() => {this.errorMessage = ''; }, 2500);
    });
  }
}
