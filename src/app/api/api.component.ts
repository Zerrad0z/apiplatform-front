import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Api } from '../model/api.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit{
    apis! : Observable<Array<Api>>;
    searchformGroup! : FormGroup;
    errorMessage! : string;

    constructor(private apiService : ApiService, private fb : FormBuilder){}

    ngOnInit(): void { 
      this.searchformGroup=this.fb.group({
        keyword : this.fb.control("")
      })
      this.handleSearchApis();
    }

    handleSearchApis(){
      let kw=this.searchformGroup?.value.keyword;
      this.apis=this.apiService.searchApi(kw).pipe(
        catchError(err=>{
          this.errorMessage=err.message;
          return throwError(err);
        })
      );
    }


}
