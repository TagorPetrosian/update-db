import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

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
  @Output() remove = new EventEmitter<number>();

  onRemove(): void {
    this.remove.emit(this.index);
  }

  ngOnInit(): void {
    console.log('FileRequestItemComponent initialized with title:', this.title);
  }
}
