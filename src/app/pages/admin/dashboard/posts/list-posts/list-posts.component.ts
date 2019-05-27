import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '@servicesauth.service';
import {User} from '@models/user.model';
import {PostsService} from '@services/posts.service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'page-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent {

  constructor(private postsService: PostsService) {
  }
}
