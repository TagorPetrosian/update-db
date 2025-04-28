import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DialogService } from '../../services/dialog.service';

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
    FormsModule
  ]
})
export class FileRequestItemComponent implements OnInit {
  @Input() title: string = 'מספר הדרכים באוכלוסיה הכללית';
  @Input() index: number = 0;
  @Input() shouldOpenAsDialog: boolean = false;
  @Output() remove = new EventEmitter<number>();

  constructor(private dialogService: DialogService) {}

  onRemove(): void {
    this.remove.emit(this.index);
  }

  onPanelClick(event: MouseEvent): void {
    if (this.shouldOpenAsDialog) {
      // Prevent the default panel expansion behavior when in dialog mode
      event.preventDefault();
      event.stopPropagation();

      // Open dialog with the panel content
      this.dialogService.openDialog({
        title: this.title,
        content: document.querySelector('.panel-content')?.innerHTML || '',
        actions: [
          { label: 'סגור', action: 'close' }
        ]
      });
    }
  }

  ngOnInit(): void {
    console.log('FileRequestItemComponent initialized with title:', this.title);
  }
}
