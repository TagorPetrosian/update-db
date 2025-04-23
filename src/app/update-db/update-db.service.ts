import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UpdateRequest {
  dbVersion?: string;
  updateType: 'full' | 'incremental';
}

interface UpdateResponse {
  success: boolean;
  message: string;
  version?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UpdateDbService {
  private apiUrl = '/api/database/update';

  constructor(private http: HttpClient) {}

  updateDatabase(data: UpdateRequest): Observable<UpdateResponse> {
    return this.http.post<UpdateResponse>(this.apiUrl, data);
  }

  getDatabaseStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/status`);
  }
}
