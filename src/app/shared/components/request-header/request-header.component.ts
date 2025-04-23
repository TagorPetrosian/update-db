import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-header',
  templateUrl: './request-header.component.html',
  styleUrls: ['./request-header.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RequestHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() alertText: string = '';
  @Input() showAlert: boolean = true;
}
