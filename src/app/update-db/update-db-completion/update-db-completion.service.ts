import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDbCompletionService {
  constructor() { }

  getRequestSummary(): Observable<any> {
    // Mock implementation - replace with actual API call
    return of({
      requestId: 'REQ-2023-1052',
      requestName: 'הרחבת מסד נתונים למחקר השתלבות בשוק העבודה',
      status: 'pending_approval',
      createdDate: '2023-10-15',
      lastUpdated: '2023-10-20',
      dataFiles: [
        { name: 'employment_data_2022.csv', status: 'processed', size: '2.4MB' },
        { name: 'demographic_data.xlsx', status: 'processed', size: '1.8MB' }
      ],
      codebooks: [
        { name: 'employment_codebook_v2', version: '2.0', status: 'approved' }
      ]
    });
  }

  submitFinalRequest(data: any): Observable<any> {
    // Mock implementation - replace with actual API call
    console.log('Submitting final request:', data);
    return of({ success: true, message: 'Request submitted successfully', requestId: 'REQ-2023-1052' });
  }
}
