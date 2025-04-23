import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-external-file-request',
  templateUrl: './external-file-request.component.html',
  styleUrls: ['./external-file-request.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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

  // Action buttons properties
  @Input() showActionButtons: boolean = false;
  @Input() showPrimaryButton: boolean = false;
  @Input() primaryButtonText: string = 'הוספת בקשה נוספת';
  @Input() primaryButtonIcon: string = '+';
  @Input() showSecondaryButton: boolean = false;
  @Input() secondaryButtonText: string = 'מספר הדרכים באוכלוסיה הכללית';
  @Input() secondaryButtonIcon: string = '📄';

  // Events
  @Output() optionSelected = new EventEmitter<string>();
  @Output() checkboxChange = new EventEmitter<boolean>();
  @Output() primaryButtonClick = new EventEmitter<void>();
  @Output() secondaryButtonClick = new EventEmitter<void>();

  onOptionChange(value: string): void {
    this.selectedOption = value;
    this.optionSelected.emit(value);
  }

  onCheckboxChange(): void {
    this.checkboxChange.emit(this.addFilesChecked);
  }

  onPrimaryButtonClick(): void {
    this.primaryButtonClick.emit();
  }

  onSecondaryButtonClick(): void {
    this.secondaryButtonClick.emit();
  }
}
