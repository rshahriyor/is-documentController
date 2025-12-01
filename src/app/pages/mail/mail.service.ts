import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IMessage {
    id?: number,
    fullName?: string,
    text?: string
    date?: Date,
    read?: boolean,
  }

const API_URL = `${environment.apiUrl}/users`;

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private http = inject(HttpClient);

  getMessages(): Observable<any> {
    return this.http.get<any>(API_URL);
  }

  getMessageById(id: number | null): Observable<any> {
    return this.http.get<any>(`${API_URL}/${id}`);
  }

  markAsRead(id: number | null, body: IMessage): Observable<any> {
    return this.http.put<any>(`${API_URL}/${id}`, body);
  }
  
}
