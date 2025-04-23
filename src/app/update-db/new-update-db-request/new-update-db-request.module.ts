import { NgModule } from '@angular/core';
import { NewUpdateDbRequestRoutingModule } from './new-update-db-request-routing.module';
import { NewUpdateDbRequestService } from './new-update-db-request.service';

@NgModule({
  imports: [NewUpdateDbRequestRoutingModule],
  providers: [NewUpdateDbRequestService],
})
export class NewUpdateDbRequestModule {}
