import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '@servicesauth.service';
import {User} from '@models/user.model';
import {PostsService} from '@services/posts.service';

@Component({
  selector: 'page-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
}
