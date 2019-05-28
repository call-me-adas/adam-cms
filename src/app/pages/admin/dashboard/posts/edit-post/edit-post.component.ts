import {Component, OnInit} from '@angular/core';
import {PostsService} from '@services/posts.service';
import { environment } from '@environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DialogYesNoComponent} from '@app/components/dialog-yes-no/dialog-yes-no.component';

@Component({
  selector: 'page-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  idParametr: string;
  ckeConfig: any;
  defaultContent: any;
  errorMessage;
  successMessage;

  constructor(private postsService: PostsService, private route: ActivatedRoute, public dialog: MatDialog, private router: Router) {
    this.ckeConfig = environment.ckeConfig;
    // this.defaultContent = environment.defaultCkeContent;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.idParametr = params.params.id;
      this.getPost(this.idParametr);
    });
  }

  getPost(id: string) {
    this.postsService.getPost(id).subscribe((res: any) => {
      this.defaultContent = res.payload.data().body;
    });
  }

  editPost(id: string) {
    this.postsService.editPost(id, {body: this.defaultContent});
  }

  deletePost(id: string) {
    this.postsService.deletePost(id);
  }

  delete() {
    this.openDialog(false);
  }

  openDialog(edit): void {
    const dialogRef = this.dialog.open(DialogYesNoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!edit) {
          this.deletePost(this.idParametr);
        } else {
          this.editPost(this.idParametr);
        }
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    });
  }

  edit() {
    this.openDialog(true);
  }
}
