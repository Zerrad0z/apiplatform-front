import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../model/api.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getApi():Observable<Array<Api>>{
    return this.http.get<Array<Api>>(environment.backendHost+"/list")
  }

  public searchApi(keyword : string):Observable<Array<Api>>{
    return this.http.get<Array<Api>>(environment.backendHost+"/search?keyword="+keyword)
  }
}
