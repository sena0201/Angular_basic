import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello world!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['']
})
export class AppComponent {
  name = 'Kha Nguyen';
  imgURL = 'https://picsum.photos/id/237/500/500';
  currentDate = new Date();
  cost = 2000;
  temperature = 30030.2;
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large',
  };

  images = [
    'https://picsum.photos/id/111/500/500',
    'https://picsum.photos/id/222/500/500',
    'https://picsum.photos/id/223/500/500',
  ];

  blueClass = false;

  fontSize = 16;

  border = 4;

  red = 'red';

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
