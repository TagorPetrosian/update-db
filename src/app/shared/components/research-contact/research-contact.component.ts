import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research-contact',
  templateUrl: './research-contact.component.html',
  styleUrls: ['./research-contact.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ResearchContactComponent {
  // Contact information
  contactName: string = 'רבקה חפץ';
  contactPhone: string = '02-3456920';
  contactEmail: string = 'rivkah@cnj.co.il';
}
