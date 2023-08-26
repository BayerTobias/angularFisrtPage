import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images = ['tiger1.jpg', 'tiger2.jpg', 'tiger3.jpg'];
  currentImg = 0;
  showImg = true;

  ngOnInit() {
    setInterval(() => this.updateImg(), 8000);
  }

  updateImg() {
    this.currentImg++;
    this.currentImg = this.currentImg % this.images.length;
    this.showImg = false;
    setTimeout(() => {
      this.showImg = true;
    }, 10);
  }
}
