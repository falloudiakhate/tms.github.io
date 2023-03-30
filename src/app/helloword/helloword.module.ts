import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HellowordRoutingModule } from './helloword-routing.module';
import { HellowordComponent } from './helloword.component';


@NgModule({
  declarations: [
    HellowordComponent
  ],
  imports: [
    CommonModule,
    HellowordRoutingModule
  ]
})
export class HellowordModule { }
