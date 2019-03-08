import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isVisible = true;

  shopNow() {
    this.hideColorPicker();
  }

  hideColorPicker() {
    this.isVisible = false;
  }
}
