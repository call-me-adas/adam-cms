import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '@servicesauth.service';
import {User} from '@models/user.model';
import {PostsService} from '@services/posts.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'page-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  ckeConfig: any;
  content = {
    pl: {
      draft: true,
      url: 'url-pl',
      image: environment.defaultFeaturedImage,
      title: 'Domyślny nagłówek',
      body: ''
    },
    gb: {
      draft: true,
      url: 'url-gb',
      image: environment.defaultFeaturedImage,
      title: 'Default title',
      body: ''
    }
  };
  environment = environment;
  currentUser: User;
  errorMessage;
  successMessage;

  constructor( private router: Router, private postsService: PostsService) {
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

  send() {
    this.postsService.addNewPost({body: this.content})
      .then(data => {
        this.successMessage = data.msg;
        setTimeout(() => {this.successMessage = ''; }, 2500);
      }).catch(err => {
      this.errorMessage = err.msg;
      setTimeout(() => {this.errorMessage = ''; }, 2500);
    });
  }
}
