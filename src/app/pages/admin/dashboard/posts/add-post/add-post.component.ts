import {Component} from '@angular/core';
import {PostsService} from '@services/posts.service';
import {environment} from '@environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DialogYesNoComponent} from '@components/dialog-yes-no/dialog-yes-no.component';
import {AuthenticationService} from '@services/auth.service';
import {User} from '@models/user.model';

@Component({
  selector: 'page-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  defaultContent: any;
  correct = false;
  showBackground = false;
  currentUser: User;

  constructor(private postsService: PostsService, private route: ActivatedRoute,
              public dialog: MatDialog, private router: Router,
              private snackBar: MatSnackBar,
              private authenticationService: AuthenticationService) {
    this.defaultContent = environment.defaultCkeContent;
    this.currentUser = this.authenticationService.currentUserValue;
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
    const UserVar = {id: this.currentUser.id, name: this.currentUser.username};
    this.defaultContent.en.author = UserVar;
    this.defaultContent.pl.author = UserVar;
    this.defaultContent.en.date = new Date();
    this.defaultContent.pl.date = new Date();

    this.postsService.addNewPost({body: this.defaultContent})
      .then(data => {
        this.router.navigate(['../'], { relativeTo: this.route });
        this.snackBar.open(data.msg, '', {
          duration: 3000,
          panelClass: ['success-snackbar'],
          verticalPosition: 'top'
        });
      }).catch(err => {
      this.snackBar.open(err.msg, '', {
        duration: 3000,
        panelClass: ['error-snackbar'],
        verticalPosition: 'top'
      });
    });
  }
}
