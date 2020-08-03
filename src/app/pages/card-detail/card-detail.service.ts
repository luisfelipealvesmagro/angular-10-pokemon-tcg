import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CardDetailService {

  private api = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getCard(id: string): Observable<any> {
    return this.http.get(`${this.api}/cards/${id}`);
  }

}
