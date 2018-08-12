import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExemplifyModule } from '../../projects/exemplify/src/lib/exemplify.module';
import { InlineSnippetComponent } from './components/inline-snippet/inline-snippet.component';
import { EscapingStringsComponent } from './components/escaping-strings/escaping-strings.component';
import { BasicExampleComponent } from './components/basic-example/basic-example.component';
import { RawLoaderComponent } from './components/raw-loader/raw-loader.component';
import { FormComponent } from './components/sources/form.component';
import {HttpClientModule} from '@angular/common/http';
import {FooComponent} from './components/raw-loader/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineSnippetComponent,
    EscapingStringsComponent,
    BasicExampleComponent,
    FormComponent,
    FooComponent,
    RawLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ExemplifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
