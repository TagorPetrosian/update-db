import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDbComponent } from './components/update-db/update-db.component';

const routes: Routes = [
  {
    path: 'update-db-request',
    component: UpdateDbComponent,
    children: [
      {
        path: 'new-request',
        loadChildren: () => import('./new-update-db-request/new-update-db-request.module').then(m => m.NewUpdateDbRequestModule)
      },
      {
        path: 'codebook',
        loadChildren: () => import('./update-db-codebook/update-db-codebook.module').then(m => m.UpdateDbCodebookModule)
      },
      {
        path: 'data-handling',
        loadChildren: () => import('./update-db-data-handling/update-db-data-handling.module').then(m => m.UpdateDbDataHandlingModule)
      },
      {
        path: 'completion',
        loadChildren: () => import('./update-db-completion/update-db-completion.module').then(m => m.UpdateDbCompletionModule)
      },
      {
        path: '',
        redirectTo: 'new-request',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDbRoutingModule { }
