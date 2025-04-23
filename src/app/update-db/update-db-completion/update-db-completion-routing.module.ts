import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDbCompletionComponent } from './components/update-db-completion/update-db-completion.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateDbCompletionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDbCompletionRoutingModule { }
