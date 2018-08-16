import {Injectable, ViewContainerRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  /* parse html from and return element matched with selector */
  parseHtml(template: ViewContainerRef | string, selector: string) {
    const parser = new DOMParser();
    let htmlTemplate = '';
    try {
      htmlTemplate = typeof template !== 'string' ? template[ '_data' ].componentView.component.viewContainerRef[ '_view' ].component.constructor['__annotations__'][0].template : template;
    } catch (e) {
        console.warn('Exemplify: couldn\'t retrieve html for "' + selector + '", most likely due to annotations being removed with aot build. Referer to the following issue for more info and workaround:', 'https://github.com/hjalmers/angular-exemplify/issues/15');
    }
    let output = '';
    const markupExampleCode = parser.parseFromString(htmlTemplate, 'text/html').querySelectorAll(selector);
    if (markupExampleCode.length === 0 && htmlTemplate !== '') {
      console.warn('Exemplify: no element matched selector, no markup returned.');
    }
    for (let i = 0; i < markupExampleCode.length; i++) {
      output += markupExampleCode[i].outerHTML + '\n';
    }
    return output === '' ? 'no elements matched: "' + selector + '"' : output;
  }
}
