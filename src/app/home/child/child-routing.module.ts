import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child.component';

const routes: Routes = [
  { path: '', component: ChildComponent },
  { path: 'item1', loadChildren: () => import('./item1/item1.module').then(m => m.Item1Module) },
  { path: 'item2', loadChildren: () => import('./item2/item2.module').then(m => m.Item2Module) },
  { path: 'item3', loadChildren: () => import('./item3/item3.module').then(m => m.Item3Module) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
