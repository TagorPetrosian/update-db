import { Injectable, TemplateRef, Type } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { DialogComponent, DialogData } from '../components/dialog/dialog.component';
import { ExternalFileFormComponent } from '../components/external-file-form/external-file-form.component';
import { FormDialogComponent } from '../components/form-dialog/form-dialog.component';

export interface DialogOptions {
  title: string;
  content?: string;
  component?: ComponentType<any>;
  componentData?: any;
  actions: {label: string, action: string}[];
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  open(
    contentComponent: ComponentType<any> | TemplateRef<any>,
    config: DialogData = {}
  ): MatDialogRef<DialogComponent> {
    const dialogConfig: MatDialogConfig = {
      width: config.width || '500px',
      height: config.height,
      panelClass: config.panelClass || 'app-dialog',
      data: {
        title: config.title || '',
        showCloseButton: config.showCloseButton !== false,
        contentComponent: contentComponent,
        componentData: config.componentData
      },
      autoFocus: false
    };

    return this.dialog.open(DialogComponent, dialogConfig);
  }

  close(): void {
    this.dialog.closeAll();
  }

  openDialog(options: DialogOptions) {
    // If a component is provided, use the component-based approach
    if (options.component) {
      return this.open(options.component, {
        title: options.title,
        componentData: options.componentData
      });
    }

    // Otherwise, use the traditional string content approach
    return this.dialog.open(DialogComponent, {
      width: '500px',
      data: options
    });
  }

  openFormDialog(title: string, initialData?: any): MatDialogRef<FormDialogComponent> {
    return this.dialog.open(FormDialogComponent, {
      width: '500px',
      data: {
        title,
        initialData
      }
    });
  }
}
