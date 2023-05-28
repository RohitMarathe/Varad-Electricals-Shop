import { Injectable } from '@angular/core';
import { IBillDiary } from '../Models/Interfaces/IBillDiary';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillingServiceService {

  public serverURL = "../../assets/BillingDiary.json";

  constructor(private http:HttpClient) { }

  getBillingData(): Observable<IBillDiary[]> {
    return this.http.get<IBillDiary[]>(this.serverURL);
  }
}
