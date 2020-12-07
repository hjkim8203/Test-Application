import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DogComponent } from './dog/dog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dad-test-app';
  variable1 = 'Yorkhill~'; // class variable
  dog: DogComponent = new DogComponent();
  // = new DogComponent();
  amount: number;
  mouse;

  constructor() { }

  ngOnInit(): void { // function
    console.log('dogcomponent', this.dog);
    this.dog.mouth = 5;
    this.dog.ear = this.eat();
    this.dog.tail = {paw: 'black'};
    const toto = ''; // local variable
    // console.log(this.dog);
    this.amount = 5;

    console.log('calling ifloop');
    this.ifloop();

    console.log('mouse', this.mouse);
  }


  eat(): string {
    return 'Jeremy' + 'Joseph';
  }

  ifloop(): void {
    console.log('we are in if loop function');
    console.log(this.dog.mouth);
    if (this.dog.mouth < 3) {
      for (let i = 0; i++; i < 10) {
        console.log('i', i);
      }
    } else if (this.dog.mouth > 10) {
      for (let j = 0; j++; j < 10) {
        console.log('j', j);
      }
    } else {
      console.log('last if else');
      for (let k = 0; k < 10; k++) {
        console.log('k',k);
      }
    }
  }
}
