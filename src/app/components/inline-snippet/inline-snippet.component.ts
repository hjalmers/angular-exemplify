import { Component, OnInit } from '@angular/core';
import {Snippet} from '../../../../projects/exemplify/src/lib/interfaces/snippet';

@Component({
  selector: 'inline-snippet',
  templateUrl: './inline-snippet.component.html',
  styles: []
})
export class InlineSnippetComponent implements OnInit {

  sources: Array<Snippet> = [{
    name: 'inline snippet',
    src: '<div class="foo">some snippet</div>',
    lang: 'markup'
  }, {
    name: 'source config',
    src: `
    sources: Array<Snippet> = [{
      name: 'inline snippet',
      src: '<div class="foo">some snippet</div>',
      lang: 'markup'
    }, {
      name: 'source config',
      src: \`
        ** your code **
      \`,
      lang: 'markup'
    }];
    `,
    lang: 'javascript'
  }];

  constructor() { }

  ngOnInit() {
  }

}
