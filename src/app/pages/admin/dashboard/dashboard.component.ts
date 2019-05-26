import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '@servicesauth.service';
import {User} from '@models/user.model';
import {Role} from '@models/role.model';
import {PostsService} from '@services/posts.service';

@Component({
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('myckeditor') ckeditor: any;
  ckeConfig: any;
  content: string;

  currentUser: User;

  constructor( private router: Router, private authenticationService: AuthenticationService, private postsService: PostsService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.ckeConfig = {
      toolbar: [
        { name: 'clipboard', items: [ 'Undo', 'Redo' ] },
        { name: 'styles', items: [ 'Styles', 'Format' ] },
        { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Strike', '-', 'RemoveFormat' ] },
        { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
        { name: 'links', items: [ 'Link', 'Unlink' ] },
        { name: 'insert', items: [ 'Image', 'EmbedSemantic', 'Table' ] },
        { name: 'tools', items: [ 'Maximize' ] },
        { name: 'editing', items: [ 'Scayt' ] }
      ],
      customConfig: '',
      extraPlugins: 'autoembed,embedsemantic,image2',
      removePlugins: 'image',
      height: 600,
      bodyClass: 'article-editor',
      format_tags: 'p;h1;h2;h3;pre',
      removeDialogTabs: 'image:advanced;link:advanced',
    };
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  send() {
    console.log(this.content);
    this.postsService.addNewPost({body: this.content})
      .then(data => {
        console.log('dodalo sie', data);
      });
  }
}
