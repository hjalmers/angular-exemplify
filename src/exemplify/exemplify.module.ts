import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SourceService} from "./services/source.service";
import {WindowRef, AddExampleDirective} from "./directives/add-example.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [WindowRef, SourceService],
  declarations: [AddExampleDirective],
  exports: [AddExampleDirective]
})
export class ExemplifyModule { }
