import { Component, ViewChild, TemplateRef } from '@angular/core';
import { DialogService } from '../shared/services/dialog.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-some-component',
  template: `
    <button (click)="openDialog()">Open Dialog</button>

    <ng-template #dialogContent>
      <p>This is the dialog content!</p>
      <button mat-button (click)="closeDialog()">Close</button>
    </ng-template>
  `,
  standalone: true,
  imports: [MatButtonModule]
})
export class SomeComponent {
  @ViewChild('dialogContent') dialogContent!: TemplateRef<any>;

  constructor(private dialogService: DialogService) {}

  openDialog(): void {
    const dialogRef = this.dialogService.open(this.dialogContent, {
      title: 'Dialog Title',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    });
  }

  closeDialog(): void {
    this.dialogService.close();
  }
}
