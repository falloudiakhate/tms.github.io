import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokensComponent } from './tokens.component';

const routes: Routes = [
  { path: '', component: TokensComponent, children: [
    { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, 
    { path: 'collections', loadChildren: () => import('./components/collections/collections.module').then(m => m.CollectionsModule) },
    { path: '**', redirectTo: '/tokens/home'},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokensRoutingModule { }
