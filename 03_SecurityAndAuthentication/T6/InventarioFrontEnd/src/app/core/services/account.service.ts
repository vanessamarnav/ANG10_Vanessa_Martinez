import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User, signIn } from '../interfaces/user';
import { ResponseModel } from '../interfaces/response-model';
import { SwalAlertService } from './swal-alert.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  urlBase: string ='https://localhost:44360/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient,
    private alertS: SwalAlertService) { }

  errorHandler(error: HttpErrorResponse){
    console.log(error);
    this.alertS.errorAlert('Lo sentimos,error detectado favor de validar más tarde','Error inesperado!');
    let errorMessage = `Error code: ${error.status}`;
    if(error.status == 404){
      
      errorMessage = `${errorMessage} \n message: ${error.error.message}`;
    }
    if (error.error.hasError && error.status == 200) {
      errorMessage =  `message: ${error.error.message}`;
    }
    return throwError(()=> new Error(errorMessage));
  }

  SignIn(request: signIn): Observable<ResponseModel<any>> { 
    let url: string = `${this.urlBase}/api/account`;
    return this.http.post<ResponseModel<any>>(url, request, this.httpOptions).pipe(catchError(this.errorHandler));
  }

  SignUp(request: User): Observable<ResponseModel<any>>  { 
    let url: string = `${this.urlBase}/api/user`;
    return <any>this.http.post<ResponseModel<any>>(url, request, this.httpOptions).pipe(catchError(this.errorHandler));
  }
}
