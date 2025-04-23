import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDbComponent } from './update-db.component';

const routes: Routes = [
  { path: 'update-db-request', component: UpdateDbComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDbRoutingModule { }
