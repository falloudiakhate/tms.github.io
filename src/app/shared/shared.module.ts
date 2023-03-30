import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule,



  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule
  ]
})
export class SharedModule { }
