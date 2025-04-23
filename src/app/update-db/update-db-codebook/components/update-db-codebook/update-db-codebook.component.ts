import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateDbCodebookService } from '../../update-db-codebook.service';

@Component({
  selector: 'app-update-db-codebook',
  templateUrl: './update-db-codebook.component.html',
  styleUrls: ['./update-db-codebook.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class UpdateDbCodebookComponent {
  codebookForm: FormGroup;
  submitting = false;
  submitSuccess = false;

  constructor(
    private fb: FormBuilder,
    private codebookService: UpdateDbCodebookService
  ) {
    this.codebookForm = this.fb.group({
      codebookName: ['', Validators.required],
      version: ['', Validators.required],
      description: [''],
      fileUpload: ['']
    });
  }

  onSubmit(): void {
    if (this.codebookForm.valid) {
      this.submitting = true;

      this.codebookService.submitCodebook(this.codebookForm.value)
        .subscribe({
          next: (response) => {
            this.submitting = false;
            this.submitSuccess = true;
            this.codebookForm.reset();
          },
          error: (error) => {
            this.submitting = false;
            console.error('Error submitting codebook:', error);
          }
        });
    } else {
      // Mark all fields as touched to trigger validation
      Object.keys(this.codebookForm.controls).forEach(key => {
        this.codebookForm.get(key)?.markAsTouched();
      });
    }
  }
}
