import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-pane',
  templateUrl: './process-pane.component.html',
  styleUrls: ['./process-pane.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProcessPaneComponent {
  @Input() headerTitle: string = '';
  @Input() buttonText: string = 'המשך בבקשה';
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick(): void {
    this.buttonClick.emit();
  }
}
