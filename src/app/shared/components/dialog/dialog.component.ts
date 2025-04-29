import { Component, Inject, Input, TemplateRef, Injector, ViewChild, AfterViewInit, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface DialogData {
  title?: string;
  showCloseButton?: boolean;
  width?: string;
  height?: string;
  panelClass?: string;
  contentComponent?: any;
  componentData?: any;
  content?: string;
  actions?: { label: string; action: string }[];
}

@Component({
  selector: 'app-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <!-- Display component if contentComponent is provided -->
      <ng-container *ngIf="data.contentComponent">
        <ng-container *ngComponentOutlet="data.contentComponent; injector: componentInjector;
                      onCreated: onComponentCreated.bind(this)"></ng-container>
      </ng-container>

      <!-- Display HTML content if component is not provided -->
      <div *ngIf="!data.contentComponent" [innerHTML]="data.content"></div>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button
        *ngFor="let action of data.actions"
        mat-button
        [mat-dialog-close]="action.action === 'submit' ? validateAndSubmit() : action.action">
        {{ action.label }}
      </button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule]
})
export class DialogComponent {
  componentInjector: Injector;
  componentRef: any; // Store component reference

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private injector: Injector
  ) {
    // Create a custom injector that provides the componentData to the child component
    this.componentInjector = Injector.create({

      providers: [
        { provide: 'COMPONENT_DATA', useValue: data.componentData }
      ],
      parent: this.injector
    });
    console.log(data);
  }

  isComponent(content: any): boolean {
    return content && !(content instanceof TemplateRef);
  }

  isTemplate(content: any): boolean {
    return content instanceof TemplateRef;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  validateAndSubmit() {
    // If we have a component that has a submitForm method, call it
    const componentInstance = this.componentRef?.instance;
    if (componentInstance && typeof componentInstance.submitForm === 'function') {
      if (componentInstance.submitForm()) {
        return 'submit';
      } else {
        // Prevent dialog from closing if validation fails
        return undefined;
      }
    }
    return 'submit';
  }

  // Store component reference when created
  onComponentCreated(ref: any): void {
    this.componentRef = ref;
  }
}
