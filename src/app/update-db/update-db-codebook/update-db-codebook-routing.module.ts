import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDbCodebookComponent } from './components/update-db-codebook/update-db-codebook.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateDbCodebookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDbCodebookRoutingModule { }
