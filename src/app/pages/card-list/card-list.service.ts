import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CardListService {

  private api = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getCards(): Observable<any> {
    return this.http.get(`${this.api}/cards?pageSize=1000&page=1`);
  }

}
