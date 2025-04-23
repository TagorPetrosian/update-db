import { NgModule } from '@angular/core';
import { UpdateDbCodebookRoutingModule } from './update-db-codebook-routing.module';
import { UpdateDbCodebookService } from './update-db-codebook.service';

@NgModule({
  imports: [UpdateDbCodebookRoutingModule],
  providers: [UpdateDbCodebookService],
})
export class UpdateDbCodebookModule {}
