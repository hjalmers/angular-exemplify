import {Directive, ElementRef, Renderer, AfterContentInit} from '@angular/core';
import {Input, ViewContainerRef } from '@angular/core';
declare var Reflect:any;

import { Injectable } from '@angular/core';
import {SourceService} from "../services/source.service";
import {Observable} from "rxjs";

function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable()
export class WindowRef {
  get nativeWindow() : any {
    return _window();
  }
}

@Directive({
  selector: '[AddExample]'
})
export class AddExampleDirective implements AfterContentInit{

  @Input() target;
  @Input() source:string = 'element';
  @Input() customClass:string;
  @Input() externalSources:Array<ExternalSource>;
  @Input() usePrism:boolean = true;
  @Input() navStyle:string = 'inline';
  @Input() keepInputs:boolean = false;
  @Input() nested:boolean = false;
  @Input() visibility:boolean = true;

  private copyMarkup: Function;
  private hideMarkup: Function;
  private hostElement;
  private element;
  private renderer;
  private window;
  private elementId;
  private code;
  private pre;
  private codeP;
  private parser;
  private activeItem;
  private activeListeners:Array<any> = [];
  private prism;
  private copyContent;
  private lastClass;
  private toggleState;
  constructor(el: ElementRef, renderer: Renderer, private winRef: WindowRef, private _viewContainerRef: ViewContainerRef, private sourceService:SourceService) {

    this.hostElement = el.nativeElement;
    this.renderer = renderer;
    this.window = winRef.nativeWindow;
    this.elementId = this.hostElement.getAttribute("id");
    this.parser = new DOMParser();
    this.prism = winRef.nativeWindow.Prism;

  }

  /**
   * Copy to clipboard
   * @param {string} text - text to be copied to clipboard.
   */
  private copyToClipboard = function(text:string) {
    if (this.window.clipboardData && this.window.clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      return this.window.clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      let textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy");  // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };


  ngAfterContentInit() {

    /** Get host element */
    let hostElement;
    if(this.target) {
      hostElement = this.renderer.createElement(this.target,'div');
    } else {
      hostElement = this.renderer.createElement(this.hostElement, 'div');
    }

    this.renderer.setElementClass(hostElement,'exemplify-wrapper',true);
    if(this.customClass){
      this.renderer.setElementClass(hostElement, this.customClass,true);
    }

    /** create nav element to hold links */
    const nav = this.renderer.createElement(hostElement, 'ul');
    const func = this.renderer.createElement(nav, 'div');
    const funcSpan = this.renderer.createElement(func, 'span');
    this.renderer.createText(funcSpan,'Example:');
    this.renderer.setElementClass(funcSpan, ('exemplify-label'),true);
    this.renderer.setElementClass(nav, ('nav'),true);
    this.renderer.setElementClass(nav, ('nav-'+this.navStyle),true);

    if(this.externalSources) {
      /** Create link for toggling markup */
      this.addLink(nav,'html', this.getHtmlMarkup());

      let links:Array<Observable<string>> = [];
      for (let i = 0; i < this.externalSources.length;i++) {
        links.push(this.sourceService.getSource(this.externalSources[i].src));
        this.sourceService.getSource(this.externalSources[i].src)
          .subscribe(
            code => {
              this.addLink(nav,this.externalSources[i].name,code,this.externalSources[i].language ? this.externalSources[i].language:'typescript');
            }
          );
      }
      // wait until all sources have loaded...
      Observable.forkJoin(links).subscribe(
        res => {
          this.addCopy(hostElement,func);
          this.addHide(hostElement,func);
          // ...add code container
          this.addCodeContainer(hostElement);
        }
      );
    } else {
      this.addCopy(hostElement,func);
      this.addHide(hostElement,func);
      // ...add code container
      this.addCodeContainer(hostElement);
    }

  }

  private showCode = function(code:string,language:string = 'markup'){
    this.copyContent = code;
    if(this.usePrism && this.prism) {
      // remove last used class name (needed to clear class)
      if(this.lastClass){
        this.renderer.setElementClass(this.pre, 'language-'+this.lastClass,false);
        this.renderer.setElementClass(this.code, 'language-'+this.lastClass,false);
      }
      // add classes to element
      this.renderer.setElementClass(this.pre, 'language-'+language,true);
      this.renderer.setElementClass(this.code, 'language-'+language,true);
      this.lastClass = language;
      switch (language) {
        case 'typescript':
        case 'javascript':
        case 'js':
          language = 'js';
          break;
        case 'css':
          language = 'css';
          break;
        default:
          language = 'markup';
          break;
      }
      this.code.innerHTML = this.prism.highlight(code,this.prism.languages[language]);
    } else {
      this.renderer.setText(this.codeP,code);
    }
    this.toggleVisibility(this.pre,true);
  };

  private addLink = function(hostElement,name:string,code?:any,language?:string) {

    /** Create link for toggling markup */
    const listItem = this.renderer.createElement(hostElement, 'li');
    this.renderer.setElementClass(listItem, 'nav-item',true);
    const renderElement = this.renderer.createElement(listItem, 'a');
    this.renderer.createText(renderElement,name);
    this.renderer.setElementAttribute(renderElement,'href','#');
    this.renderer.setElementClass(renderElement, 'nav-link',true);
    this.renderer.setElementClass(renderElement, 'link-' + name.toLowerCase().replace(/[ ._]/g,'-'),true);

    if(this.activeListeners.length === 0){
      this.renderer.setElementClass(renderElement, 'active',true);
      this.activeItem = renderElement;
    }

    /** Add click listener */
    let listener = this.renderer.listen(renderElement, 'click', (event) => {
      this.removeActiveClass();

      this.renderer.setElementClass(renderElement, 'active',true);
      this.showCode(code,language);
      this.activeItem = renderElement;
      event.preventDefault();
    });
    this.activeListeners.push(listener);
    return renderElement;
  };

  private addHide = function(hostElement,navElement) {
    /** Create link for copying markup */
    this.toggleState = this.renderer.createElement(navElement, 'a');
    let toggleState = this.renderer.createText(this.toggleState,'Hide');
    this.renderer.setElementAttribute(this.toggleState,'href','#');
    this.renderer.setElementClass(this.toggleState, 'link-hide',true);
    this.renderer.setElementClass(this.toggleState, 'text-muted',true);

    /** Add click listener for copying markup example */
    this.hideMarkup = this.renderer.listen(this.toggleState, 'click', (event) => {
      event.preventDefault();
      //let content = this.parser.parseFromString(this.code.innerHTML,"text/html").body.childNodes[0].textContent;
      this.toggleVisibility(toggleState);
    });
    this.activeListeners.push(this.hideMarkup);
  };

  private addCopy = function(hostElement,navElement) {
    /** Create link for copying markup */
    const copy = this.renderer.createElement(navElement, 'a');
    this.renderer.createText(copy,'Copy');
    this.renderer.setElementAttribute(copy,'href','#');
    this.renderer.setElementClass(copy, 'link-copy',true);
    this.renderer.setElementClass(copy, 'text-muted',true);

    /** Add click listener for copying markup example */
    this.copyMarkup = this.renderer.listen(copy, 'click', (event) => {
      event.preventDefault();
      //let content = this.parser.parseFromString(this.code.innerHTML,"text/html").body.childNodes[0].textContent;
      this.copyToClipboard(this.copyContent);
    });
    this.activeListeners.push(this.copyMarkup);
  };



  private getHtmlMarkup = function() {
    /** Create markup example */

    let markupExampleCode;

    console.log(markupExampleCode);
    // check if directive is nested...
    if(!this.nested){
     markupExampleCode = Reflect.getMetadata('annotations', Object.getPrototypeOf((<any>this._viewContainerRef)._element.parentView.context).constructor);

    } else {
      markupExampleCode = Reflect.getMetadata('annotations', Object.getPrototypeOf((<any>this._viewContainerRef)._element.parentView.parentView.context).constructor);
    }

    if(this.elementId) {
      markupExampleCode = this.parser.parseFromString(markupExampleCode[0].template,"text/html").getElementById(this.elementId);
    } else {

      markupExampleCode = this.parser.parseFromString(markupExampleCode[0].template,"text/html").querySelectorAll('[addexample]')[0];
      console.log('Exemplify warning! No id set for example element, returning first match.');
    }
    if(typeof markupExampleCode === 'undefined'){
      console.log('Exemplify warning! Component not found, have you applied ngIf*? If so try adding [nested]="true"');
      return
    }
    if(this.keepInputs !== true) {
      markupExampleCode.removeAttribute("addexample");
      markupExampleCode.removeAttribute("id");
      markupExampleCode.removeAttribute("[externalsources]");
      markupExampleCode.removeAttribute("[source]");
      markupExampleCode.removeAttribute("[target]");
      markupExampleCode.removeAttribute("[customclass]");
      markupExampleCode.removeAttribute("[navstyle]");
      markupExampleCode.removeAttribute("[useprism]");
      markupExampleCode.removeAttribute("[nested]");
    }

    /** Add markup content */
    let markupExampleString:string;
    switch(this.source){
      case 'child':
        markupExampleString = markupExampleCode.innerHTML;
        break;
      default:
        markupExampleString = markupExampleCode.outerHTML;
        break;
    }
    return markupExampleString;
  };

  private addCodeContainer = function(hostElement) {
    this.pre = this.renderer.createElement(hostElement, 'pre');
    this.code = this.renderer.createElement(this.pre, 'code');
    this.renderer.setElementClass(this.pre, 'markup-example',true);
    //this.renderer.setElementStyle(pre, 'display','none');
    this.codeP = this.renderer.createText(this.code,'');
    this.showCode(this.getHtmlMarkup())
  };

  private removeListeners = function(){
    for (let i = 0; i < this.activeListeners.length; i++) {
      this.activeListeners[i]();
    }
  };

  private removeActiveClass = function(){

    if(this.activeItem) {
      this.renderer.setElementClass(this.activeItem, 'active');
    }
  };

  private toggleVisibility = function(element, forceShow?:boolean) {
    if(forceShow){
      this.renderer.setElementStyle(this.pre, 'display','block');
      this.toggleState.innerHTML = "Hide";
      this.visibility = true;
      return
    }
    if(this.visibility){
      this.removeActiveClass();
      this.renderer.setElementStyle(this.pre, 'display','none');
    } else {
      if(this.activeItem) {
        this.renderer.setElementClass(this.activeItem, 'active', true);
      }
      this.renderer.setElementStyle(this.pre, 'display','block');
    }
    this.visibility = !this.visibility;
    this.renderer.setText(element,this.visibility ? 'Hide':'Show');

  };

  ngOnDestroy() {

    /** Remove click listeners */
    this.removeListeners();

  }

}

export interface ExternalSource {
  src: string;
  name: string;
  language?: string;
}
