import {Injectable, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  /* parse html from and return element matched with selector */
  parseHtml(template: ViewContainerRef | string, selector: string) {
    const parser = new DOMParser();
    const htmlTemplate = typeof template !== 'string' ? template[ '_data' ].componentView.component.viewContainerRef[ '_view' ].component.constructor['__annotations__'][0].template : template;
    let output = '';
    const markupExampleCode = parser.parseFromString(htmlTemplate, 'text/html').querySelectorAll(selector);
    if (markupExampleCode.length === 0) {
      console.warn('Exemplify: no element matched selector, no markup returned.');
    }
    for (let i = 0; i < markupExampleCode.length; i++) {
      output += markupExampleCode[i].outerHTML + '\n';
    }
    return output === '' ? 'no elements matched: "' + selector + '"' : output;
  }
}
