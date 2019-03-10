import { Component } from '@angular/core';
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
