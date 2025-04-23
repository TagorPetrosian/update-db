import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { UpdateDbComponent } from './update-db.component';
import { UpdateDbService } from './update-db.service';

const routes: Routes = [
  { path: 'update-db', component: UpdateDbComponent }
];

@NgModule({
  declarations: [
    UpdateDbComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UpdateDbService
  ],
  exports: [
    UpdateDbComponent
  ]
})
export class UpdateDbModule { }
