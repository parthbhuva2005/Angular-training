import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Item1Component } from './item1.component';

const routes: Routes = [{ path: '', component: Item1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Item1RoutingModule { }
