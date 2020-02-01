import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  content : HTMLElement;
  constructor(private policyService :ArticleService) { }

  ngOnInit() {
    this.content = document.getElementById('content');
    this.content.addEventListener('wheel', this.hideHeader);
   
  }
  hideHeader(event) {
    var delta;
        	if (event.wheelDelta){
            	delta = event.wheelDelta;
            }else{
            	delta = -1 *event.deltaY;
          }
    setTimeout(() => {
      const header: any = document.getElementsByClassName('search-bar-container');
      if (delta < 0){
        header[0].style.display = "none";
        return
        }else if (delta > 0){
        header[0].style.display = "block";
        }
    },500)
       
}
}
