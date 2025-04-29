import { Component, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ExternalFileFormComponent } from '../external-file-form/external-file-form.component';

export interface FormDialogData {
  title: string;
  initialData?: any;
}

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ExternalFileFormComponent
  ]
})
export class FormDialogComponent {
  formStatus: {valid: boolean, data: any} | null = null;

  @ViewChild('formComponent') formComponent!: ExternalFileFormComponent;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close('cancel');
  }

  onSubmit(): void {
    if (this.formComponent && this.formComponent.submitForm()) {
      this.dialogRef.close({
        action: 'submit',
        data: this.formComponent.fileForm.value
      });
    }
  }
}
