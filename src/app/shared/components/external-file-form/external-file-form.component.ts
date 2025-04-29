import { Component, OnInit, Output, EventEmitter, Input, Optional, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-external-file-form',
  templateUrl: './external-file-form.component.html',
  styleUrls: ['./external-file-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ExternalFileFormComponent implements OnInit {
  @Input() initialData: any = {};
  @Output() formStatusChange = new EventEmitter<{valid: boolean, data: any}>();

  fileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Optional() @Inject('COMPONENT_DATA') private dialogData: any
  ) {
    // If component is created inside dialog, use dialogData
    if (this.dialogData) {
      this.initialData = this.dialogData.initialData || {};
    }
  }

  ngOnInit(): void {
    this.initForm();

    // Monitor form status changes and emit up to parent
    this.fileForm.statusChanges.subscribe(() => {
      this.emitFormStatus();
    });

    // Also emit when values change
    this.fileForm.valueChanges.subscribe(() => {
      this.emitFormStatus();
    });
  }

  private initForm(): void {
    this.fileForm = this.fb.group({
      fileName: [this.initialData.fileName || '', [Validators.required]],
      fileDescription: [this.initialData.fileDescription || '', [Validators.required, Validators.minLength(10)]]
    });
  }

  private emitFormStatus(): void {
    this.formStatusChange.emit({
      valid: this.fileForm.valid,
      data: this.fileForm.value
    });
  }

  // Method to submit the form - can be called from dialog action
  submitForm(): boolean {
    if (this.fileForm.valid) {
      // Dialog will close with 'submit' action
      return true;
    } else {
      // Mark all fields as touched to show validation errors
      this.markFormGroupTouched(this.fileForm);
      return false;
    }
  }

  // Helper to mark all controls as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
}
