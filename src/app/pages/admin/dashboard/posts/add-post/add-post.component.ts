import {Component} from '@angular/core';
import {PostsService} from '@services/posts.service';
import {environment} from '@environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DialogYesNoComponent} from '@components/dialog-yes-no/dialog-yes-no.component';

@Component({
  selector: 'page-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  ckeConfig: any;
  defaultContent: any;
  editor = 'My Document\'s <h1 class="editor__header1">Title</h1>';
  correct = true;


  constructor(private postsService: PostsService, private route: ActivatedRoute,
              public dialog: MatDialog, private router: Router,
              private snackBar: MatSnackBar) {
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
    console.log(this.editor);
    // this.openDialog();
  }

  addNewPost() {
    this.postsService.addNewPost({body: this.defaultContent})
      .then(data => {
        this.router.navigate(['../'], { relativeTo: this.route });
        this.snackBar.open(data.msg, '', {
          duration: 3000,
          panelClass: ['success-snackbar'],
          verticalPosition: 'top'
        });
      }).catch(err => {
      console.log(err);
      this.snackBar.open(err.msg, '', {
        duration: 3000,
        panelClass: ['error-snackbar'],
        verticalPosition: 'top'
      });
    });
  }
}
