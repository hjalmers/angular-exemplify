import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'raw-loader',
  templateUrl: './raw-loader.component.html'
})
export class RawLoaderComponent implements OnInit {

  internalSources = [{
    name: 'foo.component.html',
    src: require('!raw-loader!app/components/raw-loader/foo.component.html'),
    lang: 'markup'
  }, {
    name: 'foo.component.ts',
    src: require('!raw-loader!app/components/raw-loader/foo.component.ts'),
    lang: 'typescript'
  }, {
    name: 'foo.component.css',
    src: require('!raw-loader!app/components/raw-loader/foo.component.css'),
    lang: 'css'
  }, {
    name: 'source config',
    src: `
  sources = [{
    name: 'foo.component.html',
    src: require('!raw-loader!app/components/raw-loader/foo.component.html'),
    lang: 'markup'
  }, {
    name: 'foo.component.ts',
    src: require('!raw-loader!app/components/raw-loader/foo.component.ts'),
    lang: 'typescript'
  }, {
    name: 'foo.component.css',
    src: require('!raw-loader!app/components/raw-loader/foo.component.css'),
    lang: 'css'
  }]
    `,
    lang: 'javascript'
  }];
  constructor() { }

  ngOnInit() {
  }

}
