import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.apiUrl}/employees`;

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private http = inject(HttpClient);

  getEmployees(): Observable<any> {
    return this.http.get<any>(API_URL);
  }
  
}
