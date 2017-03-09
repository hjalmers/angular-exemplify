import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'Application title!';
  externalSources = [{
    name:'app.module.ts',
    src:'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.module.ts'
  },{
    name:'app.component.ts',
    src:'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.component.ts'
  },{
    name:'app.component.css',
    src:'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.component.css',
    language:'css'
  }];
  escape = [
    '#myTemplate','[escapeStrings]'
  ];



  constructor(){
  }

  signIn = function(){
    console.log('you clicked sign in');
  }
}
