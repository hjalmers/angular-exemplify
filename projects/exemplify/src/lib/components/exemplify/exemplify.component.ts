import {Component, Input, OnChanges, SimpleChanges, ViewContainerRef} from '@angular/core';
import {UtilitiesService} from '../../services/utilities.service';
import {Snippet} from '../../interfaces/snippet';
import {ExemplifyTexts} from '../../interfaces/exemplify-texts';

@Component({
  selector: 'exemplify',
  templateUrl: './exemplify.component.html',
  styleUrls: ['./exemplify.component.scss']
})
export class ExemplifyComponent implements OnChanges {
  get texts(): ExemplifyTexts {
    return this._texts;
  }

  @Input() set texts(value: ExemplifyTexts) {
    this._texts = {...this._defaultTexts, ...value};
  }
  get escapeStrings(): Array<string> {
    return this._escapeStrings;
  }

  @Input() set escapeStrings(value: Array<string>) {
    this._escapeStrings = value;
  }
  get show(): boolean {
    return this._show;
  }

  @Input() set show(value: boolean) {
    this._show = value;
  }

  get sources(): Array<Snippet> {
    return this._sources;
  }

  @Input() set sources(value: Array<Snippet>) {
    this._sources = value.map(snippet => {
      return {
        name: snippet.name || snippet.src.split('/').pop(),
        lang: snippet.lang,
        src: snippet.src,
        selector: snippet.selector
      };
    });
  }

  get selector(): string {
    return this._selector;
  }

  @Input() set selector(value: string) {
    this._selector = value;
    // get parsed html template from view container reference using selector
    const parsedHtml = this.utilities.parseHtml(this.viewContainerRef, this.selector);
    this.addSnippet({
      name: this.texts.markup,
      src: this.escapeString(parsedHtml, this.escapeStrings),
      lang: 'markup'
    });
  }

  private _escapeStrings: Array<string> = [];
  private _sources: Array<Snippet> = [];
  private _show = true;
  private _selector: string;
  private _defaultTexts: ExemplifyTexts = {
    markup: 'markup',
    copy: 'Copy',
    show: 'Show',
    hide: 'Hide',
    sourceNotFound: 'Source not found',
    copySuccess: 'Code snippet successfully copied to clipboard!',
    copyError: 'Copy to clipboard failed!'
  };
  private _texts: ExemplifyTexts = this._defaultTexts;
  public activeSnippet: Snippet;
  constructor(private viewContainerRef: ViewContainerRef, private utilities: UtilitiesService) {}

  /* set active snippet */
  setActiveSnippet(snippet: Snippet) {
    this.activeSnippet = {...snippet, isActive: this.show};
  }

  ngOnChanges(changes: SimpleChanges) {
    // when inputs are changed, update active snippet if no snippet is active
    if (!this.activeSnippet) {
      // set first snippet in array to be active by default
      this.setActiveSnippet(this.sources[0]);
    }
  }

  /* compare options */
  compareFn(o1: Snippet, o2: Snippet): boolean {
    return o1 && o2 ? o1.name === o2.name : o1 === o2;
  }

  /* prepend snippet to list of snippet */
  private addSnippet(snippet: Snippet) {
    this.sources = [snippet, ...this.sources];
  }

  /* escape strings, by default angular will turn all directives and attributes into lower case when rendering the html, but we want to show them as they should be entered */
  private escapeString(html: string, strings: Array<string>): string {
    // add angular attributes and directives to the list of strings to escape
    const stringsToEscape = [...strings, '*ngIf', '*ngFor', '*ngPluralCase', '*ngSwitchCase', '*ngSwitchDefault', 'ngClass', 'ngPlural', 'ngStyle', 'ngSwitch', 'ngTemplateOutlet', '[ngIf]', '[ngFor]', '[ngForOf]', '[ngPluralCase]', '[ngSwitchCase]', '[ngSwitchDefault]', 'ngModel'];

    // loop through strings to escape and replace the lowercase version with the escaped version
    stringsToEscape.map(string => {
      const lower = new RegExp('\\' + string.toLowerCase(), 'g');
      html = html.replace(lower, string).replace('=""', '');
    });
    return html;
  }
}
