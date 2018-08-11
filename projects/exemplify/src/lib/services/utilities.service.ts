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

    const markupExampleCode = parser.parseFromString(htmlTemplate, 'text/html').querySelectorAll(selector);
    if (markupExampleCode.length > 1) {
      console.warn('Exemplify: multiple elements matched selector, the first match will be used.');
    } else if (markupExampleCode.length === 0) {
      console.warn('Exemplify: no element matched selector, no markup returned.');
    }
    return markupExampleCode.length > 0 ? markupExampleCode[0].outerHTML : '';
  }
}
