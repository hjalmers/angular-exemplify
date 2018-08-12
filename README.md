# Angular Exemplify
[![Build Status](https://travis-ci.com/hjalmers/angular-exemplify.svg?branch=master)](https://travis-ci.com/hjalmers/angular-exemplify)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A simple angular component for adding code examples based on actual code and markup! Just add <code>&lt;exemplify&gt;&lt;/exemplify&gt;</code> together with <code>[selector]=&quot;'**html selector**'&quot;</code> and/or <code>[sources]=&quot;sourceList&quot;</code> to your code and you're done:D

### View [example](https://hjalmers.github.io/angular-exemplify/)

## Dependencies
* [Prism](http://prismjs.com/) - for highlighting
* [Bootstrap](https://getbootstrap.com/) - for basic styling (optional)
* [Raw-loader](https://github.com/webpack-contrib/raw-loader) - a loader for webpack that allows importing files as a String (optional)

Please note that you don't have to use bootstrap and/or raw-loader with angular exemplify although it's recommended.

## Installation and usage

Install with
```
npm install angular-exemplify --save
```

**If you want to use together with bootstrap 4**

Run `npm install bootstrap --save`

### Usage in angular-cli project
Please note the instructions below are for projects based on angular-cli, you might need to set up things differently if you're using something else.

**Include scripts and styles in build**

If you want to use angular exemplify together with prism, make sure to add the prism script and the prism-exemplif.css or one of the prism theme css files to your `.angular-cli.json` config, bootstrap.css is optional:

```json
"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.css",
  "../node_modules/angular-exemplify/exemplify/css/prism-exemplify.css",
  "styles.css"
],
"scripts": [
  "../node_modules/prismjs/prism.js"
],
```

If you're using sass, you could also import the corresponding sass files like this instead of adding the css files:
```scss
@import "~angular-exemplify/scss/prism-exemplify";
@import "~bootstrap/scss/bootstrap";
```


**Import ExemplifyModule**
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExemplifyModule } from "angular-exemplify";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ExemplifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Basic usage
Add `<exemplify [selector]="'.btn.btn-primary'"></exemplify>` below your element like this:
```html
<button class="btn btn-primary" (click)="doSomething()">Action</button>
<exemplify [selector]="'.btn.btn-primary'"></exemplify>
```

Where `selector` could be a any html selector.

View [demo](https://hjalmers.github.io/angular-exemplify/) for live preview and more examples.

### Options

| Attribute       | Type      | Usage/description                                                                                                                                                                  | Default           |
|:----------------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|
| show            | boolean   | should the example be shown or hidden by default                                                                                                                                   | false             |
| sources         | array     | an array of objects specifying sources                                                                                                                                             |                   |
| escapeStrings   | array     | an array with strings that should be escaped (necessary for attribute strings that are written using camel case i.e. inputs, template variables etc.), see issue #1 for more info. |                   |
| texts           | object    | override default texts by passing an object containing one or more of the following properties: `sourceNotFound`,`markup`,`show`,`hide`,`copy`                                     |                   |


### Using external sources

To keep the examples in sync with your code you should reference the source files. Here's an example based on a app published and deployed to github pages.

```json
sources = [{
    "name":"app.module.ts",
    "src":"https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.module.ts"
  },{
    "name":"app.component.ts",
    "src":"https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.component.ts"
  },{
    "name":"app.component.css",
    "src":"https://raw.githubusercontent.com/hjalmers/angular-markup-example/master/src/app/app.component.css",
    "lang":"css"
  }]
```


### If you want to use raw-loader to load project files

Install with
```
npm install raw-loader --save-dev`
```

Then you need to add the followinf typings to your `typings.d.ts` file.

```js
declare module '!raw-loader!*' {
    const contents: string;
    export = contents;
}
```

To avoid errors related to `require` when using raw-loader like this:

```
sorces = [{
    name: 'app.component.ts',
    src: require('!raw-loader!app/app.component.ts'),
    lang: 'markup'
  }]
```

install types for node
```
npm install @types/node --save-dev
```

and add `node` to your types in tsconfig.app.json`

```
{
  "compilerOptions": {
    ...
    "types": [
      "node" <-- Add this
    ]
  }
}
```
