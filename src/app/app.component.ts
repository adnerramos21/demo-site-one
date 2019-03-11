import { Component, AfterViewInit } from '@angular/core';
import { showHide, slideUpDown, colorPickerParentAnimation, colorPickerAnimation, scaleUpDown } from './app.component.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    scaleUpDown,
    showHide,
    slideUpDown,
    colorPickerParentAnimation,
    colorPickerAnimation
  ]
})
export class AppComponent implements AfterViewInit {

  isVisible = true;
  slideIndex = 1;

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);
  }

  shopNow() {
    this.hideColorPicker();
  }

  hideColorPicker() {
    this.isVisible = false;
  }

  goBack() {
    this.isVisible = true;
  }

  slideUp(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  slideDown(n: number) {
    this.showSlides(this.slideIndex -= n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    const slideContainer = document.getElementsByClassName('slideshow-container') as any;
    let slideHeight = 0,
      calculateHeight = 0;

    if (n > slides.length) { this.slideIndex = 1; }

    if (n < 1) { this.slideIndex = slides.length; }

    slideHeight = +window.getComputedStyle(slides[this.slideIndex - 1], null).getPropertyValue('height').slice(0, -2);

    calculateHeight = -(slideHeight * (this.slideIndex - 1));

    slideContainer[0].style.transform = 'translate3d(0px, ' + calculateHeight + 'px, 0px)';
  }

}
