import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UpdateDbDataHandlingService } from '../../update-db-data-handling.service';

@Component({
  selector: 'app-update-db-data-handling',
  templateUrl: './update-db-data-handling.component.html',
  styleUrls: ['./update-db-data-handling.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class UpdateDbDataHandlingComponent {
  dataForm: FormGroup;
  uploading = false;
  processing = false;
  uploadSuccess = false;
  processSuccess = false;
  currentFileId: string = '';

  constructor(
    private fb: FormBuilder,
    private dataHandlingService: UpdateDbDataHandlingService,
  ) {
    this.dataForm = this.fb.group({
      datasetName: ['', Validators.required],
      datasetType: ['', Validators.required],
      description: [''],
      fileUpload: ['', Validators.required],
    });
  }

  onUpload(): void {
    if (this.dataForm.valid) {
      this.uploading = true;

      this.dataHandlingService.uploadDataFile(this.dataForm.value).subscribe({
        next: (response) => {
          this.uploading = false;
          this.uploadSuccess = true;
          this.currentFileId = 'file-' + Date.now(); // Mock file ID
        },
        error: (error) => {
          this.uploading = false;
          console.error('Error uploading data file:', error);
        },
      });
    } else {
      // Mark all fields as touched to trigger validation
      Object.keys(this.dataForm.controls).forEach((key) => {
        this.dataForm.get(key)?.markAsTouched();
      });
    }
  }

  onProcess(): void {
    if (this.currentFileId) {
      this.processing = true;

      this.dataHandlingService.processDataFile(this.currentFileId).subscribe({
        next: (response) => {
          this.processing = false;
          this.processSuccess = true;
        },
        error: (error) => {
          this.processing = false;
          console.error('Error processing data file:', error);
        },
      });
    }
  }

  resetForm(): void {
    this.dataForm.reset();
    this.uploadSuccess = false;
    this.processSuccess = false;
    this.currentFileId = '';
  }
}
