import { NgModule } from '@angular/core';
import { UpdateDbRoutingModule } from './update-db-routing.module';
import { UpdateDbService } from './update-db.service';
import { NewUpdateDbRequestModule } from './new-update-db-request/new-update-db-request.module';

@NgModule({
  imports: [
    UpdateDbRoutingModule,
    NewUpdateDbRequestModule
  ],
  providers: [
    UpdateDbService
  ]
})
export class UpdateDbModule { }
