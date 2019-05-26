import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private firestore: AngularFirestore) { }

  addNewPost(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('posts')
        .add(data)
        .then(res => resolve(res.path), err => reject(err));
    });
  }

  getPosts() {
    return this.firestore.collection('/posts').snapshotChanges().pipe(
      map((actions: DocumentChangeAction<any>[]) => {
        return actions.map((a: DocumentChangeAction<any>) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );
  }
}
