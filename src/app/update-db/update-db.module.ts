import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UpdateDbRoutingModule } from './update-db-routing.module';
import { UpdateDbComponent } from './components/update-db/update-db.component';
import { NewUpdateDbRequestModule } from './new-update-db-request/new-update-db-request.module';
import { UpdateDbService } from './update-db.service';

@NgModule({
  declarations: [
    UpdateDbComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UpdateDbRoutingModule,
    NewUpdateDbRequestModule
  ],
  providers: [
    UpdateDbService
  ],
  exports: [
    UpdateDbComponent
  ]
})
export class UpdateDbModule { }
