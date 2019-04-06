import { Component } from '@angular/core';

@Component({
  selector: 'sources',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  externalSources = [{
    name: 'form.component.html',
    src: 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/components/sources/form.component.html',
    lang: 'markup',
    selector: 'form'
  }, {
    name: 'form.component.ts',
    src: 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/components/sources/form.component.ts',
    lang: 'typescript'
  }, {
    name: 'form.component.scss',
    src: 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/components/sources/form.component.scss',
    lang: 'css'
  }, {
    name: 'markup for alert',
    src: 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/components/sources/form.component.html',
    lang: 'markup',
    selector: '.alert.alert-info'
  }];

  /* load meta example */
  metaExampleConfig = [
    {
      name: 'source config',
      src: `
  externalSources = [{
    name: 'form.component.html',
    src: 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/components/sources/form.component.html',
    lang: 'markup',
    selector: 'form'
  }, {
    name: 'form.component.ts',
    src: 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/components/sources/form.component.ts',
    lang: 'typescript'
  }, {
    name: 'form.component.scss',
    src: 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/components/sources/form.component.scss',
    lang: 'css'
  }, {
    name: 'markup for alert',
    src: 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/components/sources/form.component.html',
    lang: 'markup',
    selector: '.alert.alert-info'
  }]
    `,
      lang: 'javascript'
    }
  ];

  constructor() {}

  signIn = function() {
    console.log('you clicked sign in');
  };
}
