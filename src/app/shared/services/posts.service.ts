import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private firestore: AngularFirestore) { }

  addNewPost(data) {
    return new Promise<any>((resolve, reject) => {
      this.getPosts().pipe(take(1)).subscribe((res: any) => {
        console.log(data);
        const urlPl = data.body.pl.url;
        const urlGb = data.body.en.url;
        let err = {msg: ''};
        res.forEach(element => {
          if (element.body.pl.url === urlPl || element.body.pl.url === urlGb
            || element.body.en.url === urlGb || element.body.en.url === urlGb) {
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
          .then(val => resolve({msg: 'added ' + val.path}), error => reject(error));
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

  getPublishedPosts(lang) {
    return this.firestore.collection('/posts').snapshotChanges().pipe(
      map(actions => {
        return actions.map((a: any) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          let res = {};
          for (const prop of Object.keys(data.body)) {
            if (lang === '') {
              if (!data.body[prop].draft) {
                res = ({ id, ...data.body[prop]});
              }
            } else {
              if (!data.body[prop].draft && prop === lang) {
                res = ({ id, ...data.body[prop]});
              }
            }
          }
          return res;
        }).filter(el => el.hasOwnProperty('id'));
      })
    );
  }

  getPost(id: string) {
    return this.firestore.collection('/posts').doc(id).snapshotChanges();
  }

  getPostByUrl(url: string) {
    return new Promise<any>((resolve, reject) => {
      this.getPosts().pipe(take(1)).subscribe((res) => {
        res.forEach((item: any) => {
          for (const prop of Object.keys(item.body)) {
            if (item.body[prop].url === url) {
              resolve(item.body[prop]);
            }
          }
        });
        resolve(false);
      });
    });
  }

  deletePost(id: string) {
    return this.firestore.collection('/posts').doc(id).delete();
  }

  editPost(id: string, value) {
    return this.firestore.collection('/posts').doc(id).set(value);
  }
}
