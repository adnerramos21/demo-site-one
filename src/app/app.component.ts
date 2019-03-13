import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { showHide, slideUpDown, colorPickerParentAnimation, colorPickerAnimation, scaleUpDown } from './app.component.animation';
import { TweenLite } from 'gsap/TweenMax';

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

  @ViewChild('contentWrapper') contentWrapper;
  @ViewChild('slideshowContainer') slideshowContainer;
  @ViewChildren('slide') slides: QueryList<any>;

  isVisible = true;
  slideIndex = 1;
  colors = ['#df5525', '#e1b277', '#8e5f47'];

  constructor(private renderer: Renderer2) { }

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
    const mySlides = this.slides.map(val => val.nativeElement),
      slideContainer = this.slideshowContainer.nativeElement;

    let slideHeight = 0,
      calculateHeight = 0;


    if (n > mySlides.length) { this.slideIndex = 1; }

    if (n < 1) { this.slideIndex = mySlides.length; }

    slideHeight = +window.getComputedStyle(mySlides[this.slideIndex - 1], null).getPropertyValue('height').slice(0, -2);

    calculateHeight = -(slideHeight * (this.slideIndex - 1));

    this.renderer.setStyle(slideContainer, 'transform', `translate3d(0px, ${calculateHeight}px, 0px)`);

    this.changeBackgroundColor();
  }

  changeBackgroundColor() {
    const contentWrapper = this.contentWrapper.nativeElement;

    TweenLite.to(contentWrapper, 2, {
      backgroundColor: this.colors[this.slideIndex - 1]
    });
  }

}
