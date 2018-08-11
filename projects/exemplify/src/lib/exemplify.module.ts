import { NgModule } from '@angular/core';
import { ExemplifyComponent } from './components/exemplify/exemplify.component';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from './components/code-snippet/code-snippet.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [ExemplifyComponent, CodeSnippetComponent],
  exports: [ExemplifyComponent]
})
export class ExemplifyModule { }
