import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDbDataHandlingComponent } from './components/update-db-data-handling/update-db-data-handling.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateDbDataHandlingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDbDataHandlingRoutingModule {}
