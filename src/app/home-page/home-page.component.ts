import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  content;
  show = false;
  constructor() { }

  ngOnInit() {
    this.content = document.getElementById('content');
    console.log(this.content);
    this.content.addEventListener('wheel', this.called);
  }
  called(event) {
    var delta;
        	if (event.wheelDelta){
            	delta = event.wheelDelta;
            }else{
            	delta = -1 *event.deltaY;
          }
    setTimeout(() => {
      const header: any = document.getElementsByClassName('search-bar-container');

      if (delta < 0){
        console.log("DOWN");
        this.show = false;
        header[0].style.display = "none";

        return
        }else if (delta > 0){
        console.log("UP");
        header[0].style.display = "block";

        console.log(header[0]);
        this.show = true

        }
    },500)
       
}
}
