import { NgModule } from '@angular/core';
import { UpdateDbDataHandlingRoutingModule } from './update-db-data-handling-routing.module';
import { UpdateDbDataHandlingService } from './update-db-data-handling.service';

@NgModule({
  imports: [
    UpdateDbDataHandlingRoutingModule
  ],
  providers: [
    UpdateDbDataHandlingService
  ]
})
export class UpdateDbDataHandlingModule { }
