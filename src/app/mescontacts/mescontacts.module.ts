import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MescontactsPageRoutingModule } from './mescontacts-routing.module';

import { MescontactsPage } from './mescontacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MescontactsPageRoutingModule
  ],
  declarations: [MescontactsPage]
})
export class MescontactsPageModule {}
