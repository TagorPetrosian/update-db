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
      // {
      //   path: 'approval',
      //   loadComponent: () => import('./components/approval/approval.component').then(c => c.ApprovalComponent)
      // },
      // {
      //   path: 'data-handling',
      //   loadComponent: () => import('./components/data-handling/data-handling.component').then(c => c.DataHandlingComponent)
      // },
      // {
      //   path: 'completion',
      //   loadComponent: () => import('./components/completion/completion.component').then(c => c.CompletionComponent)
      // },
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
