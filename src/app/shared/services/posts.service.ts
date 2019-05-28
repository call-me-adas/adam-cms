import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private firestore: AngularFirestore) { }

  addNewPost(data) {
    return new Promise<any>((resolve, reject) => {
      this.getPosts().pipe(take(1)).subscribe((res: any) => {
        const urlPl = data.body.pl.url;
        const urlGb = data.body.gb.url;
        let err = {msg: ''};

        res.forEach(element => {
          if (element.body.pl.url === urlPl || element.body.pl.url === urlGb
            || element.body.gb.url === urlGb || element.body.gb.url === urlGb) {
            err = {msg: 'already exist this url'};
            return;
          }
        });

        if (err.msg !== '') {
          reject(err);
          return;
        }

        this.firestore
          .collection('posts')
          .add(data)
          .then(val => resolve({msg: 'added '+ val.path}), error => reject(error));
      });
    });
  }

  getPosts() {
    return this.firestore.collection('/posts').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );
  }

  getPost(id: string) {
    return this.firestore.collection('/posts').doc(id).snapshotChanges();
  }

  deletePost(id: string) {
    return this.firestore.collection('/posts').doc(id).delete();
  }

  editPost(id: string, value) {
    return this.firestore.collection('/posts').doc(id).set(value);
  }
}
