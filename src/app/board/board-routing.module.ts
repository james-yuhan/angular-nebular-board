import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoardComponent} from './board.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [{
  path: '',
  children: [
    {path: '', component: BoardComponent},
    {path: 'detail', component: DetailComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
