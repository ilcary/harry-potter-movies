import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class ApiService {
  options = {};
  constructor(protected httpClient: HttpClient) {
  }

  get(url: string): Observable<any> {
    return this.httpClient.get<any>(url, this.options)
  }

}
