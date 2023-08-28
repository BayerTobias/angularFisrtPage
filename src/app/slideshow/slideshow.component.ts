import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent {
  images = ['tiger1.jpg', 'tiger2.jpg', 'tiger3.jpg'];
  headlines = [
    'Tieger wow toller text',
    'noch ein toller Tieger',
    'wow ein Tieger mit Baby krass',
  ];
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
