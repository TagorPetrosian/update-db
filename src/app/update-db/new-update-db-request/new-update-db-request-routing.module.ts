import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUpdateDbRequestComponent } from './new-update-db-request.component';

const routes: Routes = [
  { path: 'new-update-db-request', component: NewUpdateDbRequestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewUpdateDbRequestRoutingModule { }
