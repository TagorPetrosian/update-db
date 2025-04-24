import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileRequestItemComponent } from '../file-request-item/file-request-item.component';

interface FileRequestItem {
  title: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-external-file-request',
  templateUrl: './external-file-request.component.html',
  styleUrls: ['./external-file-request.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FileRequestItemComponent],
})
export class ExternalFileRequestComponent {
  @Input() title: string = 'בקשת קבצים חיצוניים';
  @Input() description: string = 'האם נדרשים קבצים חיצוניים לצורך המחקר?';
  @Input() required: boolean = true;
  @Input() selectedOption: string = '';

  // Checkbox properties
  @Input() showCheckbox: boolean = false;
  @Input() checkboxLabel: string = 'הוספת קבצים הנמצאים ברשותי';
  @Input() disableCheckbox: boolean = false;
  @Input() addFilesChecked: boolean = false;

  // Radio options visibility
  @Input() showRadioOptions: boolean = true;

  // File request list
  @Input() showFileList: boolean = true;
  @Input() fileRequestItems: FileRequestItem[] = [
    { title: 'מספר החרדים באוכלוסיה הכללית' },
    { title: 'מספר החרדים באוכלוסיה הכללית 2' },
    { title: 'מספר החרדים באוכלוסיה הכללית 3' },
    { title: 'מספר החרדים באוכלוסיה הכללית 4' },
    { title: 'מספר החרדים באוכלוסיה הכללית 5' },
  ];

  // Action buttons properties
  @Input() showPrimaryButton: boolean = false;
  @Input() primaryButtonText: string = 'הוספת בקשה נוספת';
  @Input() primaryButtonIcon: string = '+';

  // Events
  @Output() optionSelected = new EventEmitter<string>();
  @Output() checkboxChange = new EventEmitter<boolean>();
  @Output() primaryButtonClick = new EventEmitter<void>();
  @Output() fileRequestRemoved = new EventEmitter<number>();

  onOptionChange(value: string): void {
    this.selectedOption = value;
    this.optionSelected.emit(value);
  }

  onCheckboxChange(): void {
    this.checkboxChange.emit(this.addFilesChecked);
  }

  onPrimaryButtonClick(): void {
    // Add a new file request item
    this.fileRequestItems.push({ title: 'בקשה חדשה' });
    this.primaryButtonClick.emit();
  }

  removeFileRequest(index: number): void {
    this.fileRequestItems.splice(index, 1);
    this.fileRequestRemoved.emit(index);
  }
}
