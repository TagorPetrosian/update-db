import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDbCodebookService {
  // Empty service
  constructor() { }

  submitCodebook(data: any): Observable<any> {
    // Mock implementation - replace with actual API call
    console.log('Submitting codebook data:', data);
    return of({ success: true, message: 'Codebook submitted successfully' });
  }
}
