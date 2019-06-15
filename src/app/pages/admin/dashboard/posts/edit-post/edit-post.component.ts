import {Component, OnInit} from '@angular/core';
import {PostsService} from '@services/posts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {DialogYesNoComponent} from '@components/dialog-yes-no/dialog-yes-no.component';

@Component({
  selector: 'page-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  idParametr: string;
  langParametr: string;
  defaultContent: any;
  correct = false;
  showBackground = false;

  constructor(private postsService: PostsService, private route: ActivatedRoute,
              public dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) {
    // this.defaultContent = environment.defaultCkeContent;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.idParametr = params.params.id;
      this.langParametr = params.params.lang;
      this.getPost(this.idParametr);
    });
  }

  getPost(id: string) {
    this.postsService.getPost(id).subscribe((res: any) => {
      this.defaultContent = res.payload.data().body;
    });
  }

  editPost(id: string) {
    this.postsService.editPost(id, {body: this.defaultContent}).then(() => {
      this.snackBar.open('Edited succesfully', '', {
        duration: 3000,
        panelClass: ['success-snackbar'],
        verticalPosition: 'top'
      });
    });
  }

  deletePost(id: string) {
    this.postsService.deletePost(id).then(() => {
      this.snackBar.open('Deleted succesfully', '', {
        duration: 3000,
        panelClass: ['success-snackbar'],
        verticalPosition: 'top'
      });
    });
  }

  openDialog(callback): void {
    const dialogRef = this.dialog.open(DialogYesNoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['../../../'], { relativeTo: this.route });
        callback.apply(this, [this.idParametr]);
      }
    });
  }

  delete() {
    this.openDialog(this.deletePost);
  }

  edit() {
    this.openDialog(this.editPost);
  }
}
