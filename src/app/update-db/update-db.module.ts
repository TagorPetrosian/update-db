import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UpdateDbComponent } from './update-db.component';
import { UpdateDbService } from './update-db.service';
import { UpdateDbRoutingModule } from './update-db-routing.module';

@NgModule({
  declarations: [
    UpdateDbComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UpdateDbRoutingModule
  ],
  providers: [
    UpdateDbService
  ],
  exports: [
    UpdateDbComponent
  ]
})
export class UpdateDbModule { }
