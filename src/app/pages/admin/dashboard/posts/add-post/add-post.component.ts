import {Component} from '@angular/core';
import {PostsService} from '@services/posts.service';
import { environment } from '@environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DialogYesNoComponent} from '@app/components/dialog-yes-no/dialog-yes-no.component';

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

  constructor(private postsService: PostsService, private route: ActivatedRoute, public dialog: MatDialog, private router: Router) {
    this.ckeConfig = environment.ckeConfig;
    this.defaultContent = environment.defaultCkeContent;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogYesNoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addNewPost();
      }
    });
  }

  send() {
    this.openDialog();
  }

  addNewPost() {
    this.postsService.addNewPost({body: this.defaultContent})
      .then(data => {
        this.successMessage = data.msg;
        setTimeout(() => {
          this.successMessage = '';
          this.router.navigate(['../'], { relativeTo: this.route });
        }, 2500);
      }).catch(err => {
      this.errorMessage = err.msg;
      setTimeout(() => {this.errorMessage = ''; }, 2500);
    });
  }
}
