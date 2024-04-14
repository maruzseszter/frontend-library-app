import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getKolcsonzok(): Observable<any> {
    return this.http.get(`${this.baseUrl}/kolcsonzok`);
  }

  getKolcsonzesek(): Observable<any> {
    return this.http.get(`${this.baseUrl}/kolcsonzesek`);
  }
}
