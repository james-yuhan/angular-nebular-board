import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import {BoardRoutingModule} from './board-routing.module';
import { DetailComponent } from './detail/detail.component';
import {NbCardModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    BoardComponent,
    DetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    NbCardModule,
    Ng2SmartTableModule
  ]
})
export class BoardModule { }
