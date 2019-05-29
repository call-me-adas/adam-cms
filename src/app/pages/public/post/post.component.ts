import {Component} from '@angular/core';
import {PostsService} from '@servicesposts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'page-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  post: any;
  lang: string;

  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router,) {
      this.route.paramMap.subscribe((param: any) => {
        this.post = this.getPost(param.params.id);
      });
  }


  getPost(id: string) {
    this.postsService.getPostByUrl(id).then((res)=> {
      console.log(res);
      if (res) {
        this.post = res;
      } else {
        this.router.navigate(['../../not-found'], { relativeTo: this.route });
      }
    });
  }
}
