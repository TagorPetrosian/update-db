import { Injectable, TemplateRef, Type } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { DialogComponent, DialogData } from '../components/dialog/dialog.component';

export interface DialogOptions {
  title: string;
  content: string;
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
        contentComponent: contentComponent
      },
      autoFocus: false
    };

    return this.dialog.open(DialogComponent, dialogConfig);
  }

  close(): void {
    this.dialog.closeAll();
  }

  openDialog(options: DialogOptions) {
    return this.dialog.open(DialogComponent, {
      width: '500px',
      data: options
    });
  }
}
