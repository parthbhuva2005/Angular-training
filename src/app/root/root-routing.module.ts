import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root.component';

const routes: Routes = [
  { path: '', component:RootComponent, loadChildren: () => import('../master/master.module').then(m => m.MasterModule) },
  { path: 'auth', component:RootComponent, loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)},
  { path: '**', component:RootComponent, loadChildren: () => import('../master/master.module').then(m => m.MasterModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
