import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', [
        animate('.3s')
      ]),
      transition('hide => show', [
        animate('.3s')
      ]),
    ]),
    trigger('slideUpDown', [
      state('up', style({
        transform: 'translateY(-100px)'
      })),
      state('down', style({
        transform: 'translateY(0)'
      })),
      transition('up => down', [
        animate('.5s ease-out'),
      ]),
      transition('down => up', [
        animate('.5s ease-in')
      ]),
    ])
  ]
})
export class AppComponent {

  isVisible = true;

  shopNow() {
    this.hideColorPicker();
  }

  hideColorPicker() {
    this.isVisible = false;
  }

  goBack() {
    this.isVisible = true;
  }
}
