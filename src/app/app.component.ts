import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';
import { showHide, slideUpDown, scaleUpDown } from './app.component.animation';
import { TweenLite, TimelineMax } from 'gsap/TweenMax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    scaleUpDown,
    showHide,
    slideUpDown
  ]
})
export class AppComponent implements AfterViewInit {

  @ViewChild('contentWrapper') contentWrapper;
  @ViewChild('slideshowContainer') slideshowContainer;
  @ViewChildren('slide') slides: QueryList<any>;
  @ViewChildren('pickerElement') pickerElements: QueryList<any>;

  isVisible = true;
  slideIndex = 1;
  targetObjCopy: object;
  colors = ['#df5525', '#e1b277', '#8e5f47'];
  selectedColor = 1;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.showSlides(this.slideIndex);
  }

  goBack(): void {
    this.setVisibility();
    this.showAllColorElements();
  }

  shopNow(): void {
    this.setVisibility();
    this.hideUnselectedColorElements();
  }

  setVisibility() {
    this.isVisible = !this.isVisible;
  }

  showAllColorElements(): void {
    const colorPickerElements = this.pickerElements.map(val => val.nativeElement);

    for (let index = 0; index < colorPickerElements.length; index++) {
      if (colorPickerElements[index].classList.contains('disappear')) {
        colorPickerElements[index].classList.remove('disappear');
      }
    }

    this.moveObjectToTargetPosition(this.targetObjCopy, 0);
  }

  hideUnselectedColorElements(): void {
    const colorPickerElements = this.pickerElements.map(val => val.nativeElement);

    let accumulator = 0,
      calculatedTargetDistance = 0, targetObj: object, currentElementWidth = 0;

    for (let index = 0; index < colorPickerElements.length; index++) {
      currentElementWidth = +window.getComputedStyle(colorPickerElements[index]).width.slice(0, -2);
      accumulator += currentElementWidth;

      if (colorPickerElements[index].classList.contains('active')) {
        calculatedTargetDistance = accumulator - currentElementWidth;
        targetObj = colorPickerElements[index];
      } else {
        colorPickerElements[index].classList.add('disappear');
      }
    }

    this.targetObjCopy = targetObj;
    this.moveObjectToTargetPosition(targetObj, calculatedTargetDistance);
  }

  moveObjectToTargetPosition(targetObj: object, calculatedTargetDistance: number): void {
    TweenLite.to(targetObj, 1, {
      transform: `translate3d(-${calculatedTargetDistance}px, 0px, 0px)`
    });
  }

  slideUp(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  slideDown(n: number): void {
    this.showSlides(this.slideIndex -= n);
  }

  currentSlide(n: number): void {
    this.selectedColor = n;
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number): void {
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

  changeBackgroundColor(): void {
    const contentWrapper = this.contentWrapper.nativeElement;

    TweenLite.to(contentWrapper, 1.5, {
      backgroundColor: this.colors[this.slideIndex - 1]
    });
  }

}
