import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NewUpdateDbRequestService } from '../../new-update-db-request.service';

@Component({
  selector: 'app-new-update-db-request',
  templateUrl: './new-update-db-request.component.html',
  styleUrls: ['./new-update-db-request.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class NewUpdateDbRequestComponent implements OnInit {
  requestForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private requestService: NewUpdateDbRequestService
  ) {
    this.requestForm = this.fb.group({
      updateNames: [false],
      updateFields: [false],
      addExternalData: [false],
      updatePopulation: [false],
      requestDetails: ['']
    });
  }

  ngOnInit(): void {
    // Any initialization logic
  }

  onSubmit(): void {
    if (this.requestForm.valid) {
      this.isSubmitting = true;

      this.requestService.submitRequest(this.requestForm.value)
        .subscribe({
          next: (response) => {
            this.isSubmitting = false;
            console.log('Request submitted successfully', response);
            // Handle success (e.g., show success message, navigate to next step)
          },
          error: (error) => {
            this.isSubmitting = false;
            console.error('Error submitting request', error);
            // Handle error
          }
        });
    }
  }
}
