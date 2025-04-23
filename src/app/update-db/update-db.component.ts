import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdateDbService } from './update-db.service';

@Component({
  selector: 'app-update-db',
  templateUrl: './update-db.component.html',
  styleUrls: ['./update-db.component.css']
})
export class UpdateDbComponent implements OnInit {
  updateForm: FormGroup;
  updateStatus: string = '';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private updateDbService: UpdateDbService
  ) {
    this.updateForm = this.fb.group({
      dbVersion: [''],
      updateType: ['full']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      this.isLoading = true;
      this.updateStatus = 'Updating database...';

      const formData = this.updateForm.value;

      this.updateDbService.updateDatabase(formData).subscribe(
        response => {
          this.updateStatus = 'Database updated successfully!';
          this.isLoading = false;
        },
        error => {
          this.updateStatus = 'Error updating database: ' + error.message;
          this.isLoading = false;
        }
      );
    }
  }
}
