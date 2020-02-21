import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MescontactsPage } from './mescontacts.page';

const routes: Routes = [
  {
    path: '',
    component: MescontactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MescontactsPageRoutingModule {}
