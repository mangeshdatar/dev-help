import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Article } from '../interfaces/article.interface';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private firebaseStorage : AngularFireDatabase) {}

  getArticles() {
    return  this.firebaseStorage.list('articles').valueChanges();
  }

  addArticle(article: Article) {
    this.firebaseStorage.list('articles').push(article);
  }
}
