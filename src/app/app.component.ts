import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app works!';
  component = this;

  constructor(){
  }

  signIn = function(){

    console.log('you clicked sign in');
    console.log(Object.getPrototypeOf(this).name);
    console.log(this.constructor);
    console.log(this.constructor.templateUrl);
  }
}
