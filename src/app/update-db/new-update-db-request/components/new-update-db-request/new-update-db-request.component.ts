import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NewUpdateDbRequestService } from '../../new-update-db-request.service';
import { ExternalFileRequestComponent } from 'src/app/shared/components/external-file-request/external-file-request.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SomeComponent } from 'src/app/some-component/some-component.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-new-update-db-request',
  templateUrl: './new-update-db-request.component.html',
  styleUrls: ['./new-update-db-request.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ExternalFileRequestComponent,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    SomeComponent,
    MatDialogModule
  ],
})
export class NewUpdateDbRequestComponent implements OnInit {
  requestForm: FormGroup;
  isSubmitting = false;
  fileRequestValidations: {[id: string]: boolean} = {};

  constructor(
    private fb: FormBuilder,
    private requestService: NewUpdateDbRequestService,
  ) {
    this.requestForm = this.fb.group({
      updateNames: [false],
      updateFields: [false],
      addExternalData: [false],
      updatePopulation: [false],
      requestDetails: [''],
    });
  }

  ngOnInit(): void {
    // Any initialization logic
  }

  onSubmit(): void {
    if (this.requestForm.valid) {
      this.isSubmitting = true;

      this.requestService.submitRequest(this.requestForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          console.log('Request submitted successfully', response);
          // Handle success (e.g., show success message, navigate to next step)
        },
        error: (error) => {
          this.isSubmitting = false;
          console.error('Error submitting request', error);
          // Handle error
        },
      });
    }
  }

  onAddRequestClick(): void {
    // Handle adding a new request
    console.log('Add request button clicked');
    // Your implementation here
  }

  onViewPopulationDataClick(): void {
    // Handle viewing population data
    console.log('View population data button clicked');
    // Your implementation here
  }

  onFileRequestRemoved(index: number): void {
    console.log('File request removed at index:', index);
    // Additional logic if needed
  }

  onFileRequestValidationChange(validation: {id: string, valid: boolean, data: any}): void {
    this.fileRequestValidations[validation.id] = validation.valid;

    // You can also store the data if needed
    // Update the overall form validity
    this.updateFormValidity();
  }

  updateFormValidity(): void {
    // Check if all file requests are valid
    const allFileRequestsValid = Object.values(this.fileRequestValidations).every(isValid => isValid);

    // If you have a form control for the entire form, you can use this
    if (!allFileRequestsValid) {
      this.requestForm.setErrors({'invalidFileRequests': true});
    } else {
      // Clear the specific error (but keep other errors if they exist)
      const currentErrors = this.requestForm.errors;
      if (currentErrors) {
        delete currentErrors['invalidFileRequests'];
        this.requestForm.setErrors(Object.keys(currentErrors).length ? currentErrors : null);
      }
    }
  }
}
