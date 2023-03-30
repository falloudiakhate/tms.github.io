import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TokenComponent } from './token/token.component';
import { TokenItemComponent } from './token/token-item/token-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    TokenComponent,
    TokenItemComponent
  ],
  exports: [
    TokenComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
