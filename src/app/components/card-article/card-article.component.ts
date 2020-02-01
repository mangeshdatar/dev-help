import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ArticleService } from '../../service/article.service';
import { Article } from '../../interfaces/article.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent implements OnInit {
  articleData:Observable<Article[]> | any;
  loader = true
  
  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(res => {
      this.articleData = res;
      if (this.articleData !== null) {
        this.loader = false;
      }
    });
  }

}
