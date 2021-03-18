import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BK101Page } from './bk101.page';

const routes: Routes = [
  {
    path: '',
    component: BK101Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BK101PageRoutingModule {}
