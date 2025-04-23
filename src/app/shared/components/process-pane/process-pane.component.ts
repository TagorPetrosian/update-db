import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-process-pane',
  templateUrl: './process-pane.component.html',
  styleUrls: ['./process-pane.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProcessPaneComponent {
  @Input() headerTitle: string = 'בקשה להרחבת מסד נתונים';
  @Input() buttonText: string = 'עזרה ומידע נוסף';
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick(): void {
    this.buttonClick.emit();
  }
}
