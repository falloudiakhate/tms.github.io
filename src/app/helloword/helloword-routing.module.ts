import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HellowordComponent } from './helloword.component';

const routes: Routes = [{ path: '', component: HellowordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HellowordRoutingModule { }
