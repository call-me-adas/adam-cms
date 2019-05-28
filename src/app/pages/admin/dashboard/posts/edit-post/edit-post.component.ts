import {Component, OnInit} from '@angular/core';
import {PostsService} from '@services/posts.service';
import { environment } from '@environments/environment';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DialogYesNoComponent} from '@app/components/dialog-yes-no/dialog-yes-no.component';
import {Location} from '@angular/common';

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

  constructor(private postsService: PostsService, private route: ActivatedRoute, public dialog: MatDialog, private location: Location) {
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

  deletePost(id: string) {
    this.postsService.deletePost(id);
  }

  delete() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogYesNoComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deletePost(this.idParametr);
        this.location.go('../');
      }
    });
  }

  edit() {

  }
}
