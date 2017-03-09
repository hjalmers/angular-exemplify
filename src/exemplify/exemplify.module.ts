import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExmplifySourceService} from "./services/source.service";
import {WindowRef, ExemplifyDirective} from "./directives/exemplify.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [WindowRef, ExmplifySourceService],
  declarations: [ExemplifyDirective],
  exports: [ExemplifyDirective]
})
export class ExemplifyModule { }
