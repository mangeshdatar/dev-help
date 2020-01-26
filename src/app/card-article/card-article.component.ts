import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent implements OnInit {
  articleData: any;
  status = false
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/article-mock.json').subscribe((res) => {
      this.articleData = res;
      if (this.articleData) {
        console.log(this.articleData)
        setTimeout(() => {
          this.status = true;
        },800)
      }
    })
  }

}
