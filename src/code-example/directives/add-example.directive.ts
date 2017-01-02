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
  @Input() customClass:any = false;
  @Input() externalSources:Array<any>;
  @Input() usePrism:boolean = true;
  @Input() navStyle:string = 'inline';
  @Input() keepInputs:boolean = false;

  private copyMarkup: Function;
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

    this.renderer.setElementClass(hostElement,'example-code-container',true);
    if(this.customClass){
      this.renderer.setElementClass(hostElement, this.customClass,true);
    }

    /** create nav element to hold links */
    const nav = this.renderer.createElement(hostElement, 'ul');
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
          this.addCopy(hostElement,nav);

        }
      );
    } else {
      this.addCopy(hostElement,nav);
    }

  }

  private showCode = function(code:string,language:string = 'markup'){
    this.copyContent = code;
    if(this.usePrism) {
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
      this.code.innerHTML = this.prism.highlight(code,this.window.Prism.languages[language]);
    } else {
      this.renderer.setText(this.codeP,code);
    }
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

    // ...add code container
    this.addCodeContainer(hostElement);
  };



  private getHtmlMarkup = function() {
    /** Create markup example */

    let markupExampleCode;

    // check if directive is nested...
    if((<any>this._viewContainerRef)._element.parentView.parentIndex === 0){
     markupExampleCode = Reflect.getMetadata('annotations', Object.getPrototypeOf((<any>this._viewContainerRef)._element.parentView.context).constructor);

    } else {
      markupExampleCode = Reflect.getMetadata('annotations', Object.getPrototypeOf((<any>this._viewContainerRef)._element.parentView.parentView.context).constructor);
    }

    if(this.elementId) {
      markupExampleCode = this.parser.parseFromString(markupExampleCode[0].template,"text/html").getElementById(this.elementId);
    } else {

      markupExampleCode = this.parser.parseFromString(markupExampleCode[0].template,"text/html").querySelectorAll('[addexample]')[0];
      console.log('no id attribute set for example element, returning first match.');
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

  ngOnDestroy() {


    /** Remove click listeners */
    this.removeListeners();

  }

}

