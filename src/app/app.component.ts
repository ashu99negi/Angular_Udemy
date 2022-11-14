import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  name = 'udemy';
  counter = 0;
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  
  incrementCounter() {
    this.counter += 1;
  }

  decrementCounter() {
    if(this.counter == 0)
    {
      return;
    }
    this.counter -= 1;

  }

  showMessage(value: string) {
    console.log("value", value);
    this.name = value;
  }

}
