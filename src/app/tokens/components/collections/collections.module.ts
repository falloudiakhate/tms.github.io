import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import { CardsComponent } from './cards/cards.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { TokenListComponent } from './token-list/token-list.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";
import {CollectionService} from "../../../services/collection.service";
import {HttpClientModule} from "@angular/common/http";
import {HomeModule} from "../home/home.module";
import {TokenComponent} from "../home/token/token.component";
import {TokensModule} from "../../tokens.module";

@NgModule({
  declarations: [
    CollectionsComponent,
    CardsComponent,
    TokenListComponent,

  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatListModule,
    HttpClientModule,
    HomeModule,
    TokensModule,


  ]
})
export class CollectionsModule { }
