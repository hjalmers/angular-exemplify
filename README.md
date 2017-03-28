# Angular Exemplify

A simple angular 2+ directive for adding code examples based on actual code and markup! Just add `AddExample` to your element and you're done:D

### View [example](https://hjalmers.github.io/angular-exemplify/)

## Dependencies
- [Prism](http://prismjs.com/) - for highlighting (optional)
- [Bootstrap4](https://v4-alpha.getbootstrap.com/) - for basic styling (optional)

Please note that you don't have to use prism and/or bootstrap with angular exemplify although it's recommended.

## Installation and usage

Run `npm install angular-exemplify --save-dev`

**If you want to use together with prism**

Run `npm install prismjs --save-dev`

**If you want to use together with bootstrap 4**

Run `npm install bootstrap@4.0.0-alpha.6`

### Usage in angular-cli project
Please note the instructions below are for projects based on angular-cli, you might need to set up things differently if you're using something else.

**Include scripts and styles in build**

If you want to use angular exemplify together with prism, make sure to add the prism script and one of the prism theme css files to your `.angular-cli.json` config, bootstrap.css is optional:

```json
"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.css",
  "../node_modules/prismjs/themes/prism-coy.css",
  "../node_modules/angular-exemplify/exemplify/css/exemplify.css",
  "styles.css"
],
"scripts": [
  "../node_modules/prismjs/prism.js"
],
```

**Import ExemplifyModule**
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ExemplifyModule } from "angular-exemplify";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ExemplifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Basic usage
Add `exemplify` together with `[context]="this"` to your element like this:
```html
<button exemplify="myExample" [context]="this" class="btn btn-primary" (click)="doSomething()">Action</button>
```

Where `myExample` should be a unique identifier for your example, and `context` should point to the component holding the markup (template).

View [demo](https://hjalmers.github.io/angular-exemplify/) for live preview and more examples.

### Options

| Attribute       | Type      | Usage/description                                                                                                                                                                  | Default           |
|:----------------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|
| context         | component | to get markup through annotations exemplify needs access to component constructor, in most cases just use `[context]="this"` unless markup is specified elsewhere.                 |                   |
| target          | element   | attach example to this element, use local variable                                                                                                                                 | directive element |
| source          | string    | where to get the markup, 'element' or its 'child'                                                                                                                                  | 'element'         |
| show            | boolean   | should the example be shown or hidden by default                                                                                                                                   | false             |
| customClass     | string    | class name added to the directive element                                                                                                                                          |                   |
| externalSources | array     | an array of objects specifying external sources                                                                                                                                    |                   |
| usePrism        | boolean   | highlight code examples using prismjs (prismjs has to be included)                                                                                                                 | true              |
| navStyle        | string    | customize the style of the nav links, possible values are "tabs", "pills", "inline" see [bootstrap](http://v4-alpha.getbootstrap.com/components/navs/) for more info.              | 'inline'          |
| keepInputs      | boolean   | keep attributes attached to the directive element                                                                                                                                  | false             |
| escapeStrings   | array     | an array with strings that should be escaped (necessary for attribute strings that are written using camel case i.e. inputs, template variables etc.), see issue #1 for more info. |                   |
| texts           | object    | override default texts by passing an object containing one or more of the following properties: `heading`,`markup`,`show`,`hide`,`copy`                                            |                   |


**Using external sources**

To keep the examples in sync with your code you should reference the source files. Here's an example based on a app published and deployed to github pages.

```json
externalSources = [{
    name:"app.module.ts",
    src:"https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.module.ts"
  },{
    name:"app.component.ts",
    src:"https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.component.ts"
  },{
    name:"app.component.css",
    src:"https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.component.css",
    language:"css"
  }]
```
