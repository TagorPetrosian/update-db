import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DialogService } from '../../services/dialog.service';
import { ExternalFileFormComponent } from '../external-file-form/external-file-form.component';

@Component({
  selector: 'app-file-request-item',
  templateUrl: './file-request-item.component.html',
  styleUrls: ['./file-request-item.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ExternalFileFormComponent
  ]
})
export class FileRequestItemComponent implements OnInit {
  @Input() title: string = '';
  @Input() fileData: any = {};
  @Input() shouldOpenAsDialog = false;
  @Output() remove = new EventEmitter<void>();
  @Output() validationChange = new EventEmitter<{id: string, valid: boolean, data: any}>();

  // Assuming this component has an ID to identify which file request is reporting status
  @Input() id: string = '';

  constructor(private dialogService: DialogService) {}

  onRemove(): void {
    this.remove.emit();
  }

  onPanelClick(event: MouseEvent): void {
    if (this.shouldOpenAsDialog) {
      event.preventDefault();
      event.stopPropagation();

      // Open form dialog directly with the file data
      const dialogRef = this.dialogService.openFormDialog(this.title, this.fileData);

      // Handle dialog actions
      dialogRef.afterClosed().subscribe(result => {
        if (result && result.action === 'submit') {
          // Update the file data with the submitted values
          this.fileData = result.data;
          this.onFormStatusChange({
            valid: true,
            data: result.data
          });
          console.log('Form submitted with data:', result.data);
        } else {
          console.log('Dialog canceled');
        }
      });
    }
  }

  onFormStatusChange(status: {valid: boolean, data: any}): void {
    // Propagate validation status up to parent with this item's ID
    this.validationChange.emit({
      id: this.id,
      valid: status.valid,
      data: status.data
    });
  }

  ngOnInit(): void {
    console.log('FileRequestItemComponent initialized with title:', this.title);
  }
}
