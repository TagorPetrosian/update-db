import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateDbCompletionService } from '../../update-db-completion.service';

@Component({
  selector: 'app-update-db-completion',
  templateUrl: './update-db-completion.component.html',
  styleUrls: ['./update-db-completion.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class UpdateDbCompletionComponent implements OnInit {
  completionForm: FormGroup;
  requestSummary: any = null;
  loading = true;
  submitting = false;
  submitSuccess = false;

  constructor(
    private fb: FormBuilder,
    private completionService: UpdateDbCompletionService
  ) {
    this.completionForm = this.fb.group({
      comments: [''],
      confirmComplete: [false, Validators.requiredTrue],
      confirmAccuracy: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    this.loadRequestSummary();
  }

  loadRequestSummary(): void {
    this.loading = true;
    this.completionService.getRequestSummary()
      .subscribe({
        next: (data) => {
          this.requestSummary = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading request summary:', error);
          this.loading = false;
        }
      });
  }

  onSubmit(): void {
    if (this.completionForm.valid) {
      this.submitting = true;

      const submitData = {
        ...this.completionForm.value,
        requestId: this.requestSummary.requestId
      };

      this.completionService.submitFinalRequest(submitData)
        .subscribe({
          next: (response) => {
            this.submitting = false;
            this.submitSuccess = true;
          },
          error: (error) => {
            this.submitting = false;
            console.error('Error submitting final request:', error);
          }
        });
    } else {
      // Mark all fields as touched to trigger validation
      Object.keys(this.completionForm.controls).forEach(key => {
        this.completionForm.get(key)?.markAsTouched();
      });
    }
  }
}
