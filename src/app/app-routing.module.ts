import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tokens', loadChildren: () => import('./tokens/tokens.module').then(m => m.TokensModule) },
  { path: 'hello', loadChildren: () => import('./helloword/helloword.module').then(m => m.HellowordModule) },
  {
    path: '',
    redirectTo: '/hello',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
