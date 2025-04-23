import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProcessPaneComponent } from './components/process-pane/process-pane.component';

@NgModule({
  declarations: [
    // Shared components, directives, and pipes will go here
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    // Re-export modules that should be available to importing modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // Also export all declarations so they're available to any module that imports SharedModule
  ],
})
export class SharedModule {}
