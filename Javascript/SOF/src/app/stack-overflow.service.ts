import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackOverflowService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://api.stackexchange.com/2.2/users/571194?order=desc&sort=reputation&site=stackoverflow');
  }
}
