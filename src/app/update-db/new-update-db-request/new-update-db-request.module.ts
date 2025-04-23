import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewUpdateDbRequestRoutingModule } from './new-update-db-request-routing.module';
import { NewUpdateDbRequestService } from './new-update-db-request.service';
import { NewUpdateDbRequestComponent } from './components/new-update-db-request/new-update-db-request.component';

@NgModule({
  declarations: [
    NewUpdateDbRequestComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewUpdateDbRequestRoutingModule
  ],
  providers: [
    NewUpdateDbRequestService
  ],
  exports: [
    NewUpdateDbRequestComponent
  ]
})
export class NewUpdateDbRequestModule { }
