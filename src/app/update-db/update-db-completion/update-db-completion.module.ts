import { NgModule } from '@angular/core';
import { UpdateDbCompletionRoutingModule } from './update-db-completion-routing.module';
import { UpdateDbCompletionService } from './update-db-completion.service';

@NgModule({
  imports: [
    UpdateDbCompletionRoutingModule
  ],
  providers: [
    UpdateDbCompletionService
  ]
})
export class UpdateDbCompletionModule { }
