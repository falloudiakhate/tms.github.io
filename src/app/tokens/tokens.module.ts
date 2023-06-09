import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokensRoutingModule } from './tokens-routing.module';
import { TokensComponent } from './tokens.component';
import { SharedModule } from '../shared/shared.module';
import {TokenService} from "../services/token.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    TokensComponent
  ],
  imports: [
    CommonModule,
    TokensRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    TokensComponent
  ],
  providers: [TokenService]
})
export class TokensModule { }
