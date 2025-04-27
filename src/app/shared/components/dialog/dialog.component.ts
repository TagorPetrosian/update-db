import { Component, Inject, Input, TemplateRef } from '@angular/core';
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
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule]
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  isComponent(content: any): boolean {
    return content && !(content instanceof TemplateRef);
  }

  isTemplate(content: any): boolean {
    return content instanceof TemplateRef;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
