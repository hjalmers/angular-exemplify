import {Directive, ElementRef, Renderer, AfterContentInit} from '@angular/core';
import {Input, ViewContainerRef } from '@angular/core';
declare var Reflect:any;


import { Injectable } from '@angular/core';

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

  @Input() target:string = 'element';
  @Input() source:string = 'element';
  @Input() customClass:any = false;

  private showMarkup: Function;
  private copyMarkup: Function;
  private hostElement;
  private element;
  private renderer;
  private window;
  private parentComponentMetadata;
  private elementId;
  constructor(el: ElementRef, renderer: Renderer, private winRef: WindowRef, private _viewContainerRef: ViewContainerRef) {

    // get parent component
    this.parentComponentMetadata = Reflect.getMetadata('annotations', Object.getPrototypeOf((<any>this._viewContainerRef)._element.parentView.context).constructor);

    this.hostElement = el.nativeElement;
    this.renderer = renderer;
    this.window = winRef.nativeWindow;
    this.elementId = this.hostElement.getAttribute("id");


    var client = new XMLHttpRequest();
    var client2 = new XMLHttpRequest();
    client.open('GET', 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/temp.js');
    client.onreadystatechange = function() {
      //alert(client.responseText);
    }
    client.send();
    client2.open('GET', 'https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/temp.html');
    client2.onreadystatechange = function() {
      //alert(client2.responseText);
    }
    client2.send();
  }
  private showExample = false;

  /**
   * Copy to clipboard
   * @param {string} text - text to be copied to clipboard.
   */
  private copyToClipboard = function(text:string) {
    if (this.window.clipboardData && this.window.clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      return this.window.clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textarea = document.createElement("textarea");
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
    let example;
    switch(this.target){
      case 'parent':
        example = this.renderer.createElement(this.hostElement.parentNode.parentNode, 'div');
        break;
      default:
        example = this.renderer.createElement(this.hostElement.parentNode, 'div');
        break;
    }
    if(this.customClass){
      this.renderer.setElementClass(example, this.customClass,true);
    }

    /** Create link for toggling markup */
    const link = this.renderer.createElement(example, 'a');
    this.renderer.createText(link,'Show markup');
    this.renderer.setElementAttribute(link,'href','#');
    this.renderer.setElementClass(link, 'link-toggle-markup',true);

    /** Create link for copying markup */
    const copy = this.renderer.createElement(example, 'a');
    this.renderer.createText(copy,'Copy markup');
    this.renderer.setElementAttribute(copy,'href','#');
    this.renderer.setElementClass(copy, 'link-copy-markup',true);

    /** Create markup example */
    var parser = new DOMParser();
    var parentComponentTemplate = parser.parseFromString(this.parentComponentMetadata[0].template,"text/html");
    let markupExampleCode = parentComponentTemplate.getElementById(this.elementId);
    markupExampleCode.removeAttribute("addexample");
    markupExampleCode.removeAttribute("id");

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

    const pre = this.renderer.createElement(example, 'pre');
    const code = this.renderer.createElement(pre, 'code');
    this.renderer.setElementClass(pre, 'markup-example',true);
    this.renderer.setElementStyle(pre, 'display','none');
    this.renderer.createText(code,markupExampleString);


    /** Add click listener for toggling markup example */
    this.showMarkup = this.renderer.listen(link, 'click', (event) => {

      event.preventDefault();

      if(!this.showExample) {
        this.renderer.setElementStyle(pre, 'display','block');
        this.showExample = true;
        this.renderer.setText(link,'Hide markup');
      } else {
        this.renderer.setElementStyle(pre, 'display','none');
        this.showExample = false;
        this.renderer.setText(link,'Show markup');
      }
    });

    /** Add click listener for copying markup example */
    this.copyMarkup = this.renderer.listen(copy, 'click', (event) => {
      event.preventDefault();
      this.copyToClipboard(markupExampleString);
    });
  }

  ngOnDestroy() {

    /** Remove click listeners */
    this.showMarkup();
    this.copyMarkup();

  }

}

