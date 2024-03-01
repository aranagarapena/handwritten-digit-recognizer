import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://api-laravel.example.com';

  constructor(private http: HttpClient) { }

  // TODO-> añadir la gestion de errores
  addUser(userData: any): Observable<any> {
    return this.http.post(this.baseUrl + '/registro', userData).pipe(
      catchError(this.handleError)
    );
  }

  // TODO: faltaría investigar para que si hay un cambio en la BDs se actualice la interfaz sola, por ejemplo si desde otra pestaña del navegador, otro usuario se da de alta, que se actualice en nuestra pantallda 
  getUsers(){
    return this.http.get<any>(this.baseUrl+'/getusers')
  }

  // private handleError(apiError: HttpErrorResponse) {
  //   let errorMessage = 'Unknown error!';
  //   // let mens = '';
  //   if (apiError.error instanceof ErrorEvent) {
  //     // Client-side errors
  //     errorMessage = `Error: ${apiError.error.message}`;
  //   } else {
  //     // Server-side errors
  //     errorMessage = `Error Code: ${apiError.status}\nMessage: ${apiError.message}`;
  //     // mens = apiError.error.errors;
  //   }
  //   // console.error("Servicio - Errores:", mens);
  //   return throwError(() => errorMessage);
  // }

  private handleError(apiError: HttpErrorResponse) {
    if (apiError.error instanceof ErrorEvent) {
      // Client-side errors
      return throwError(() => `Error: ${apiError.error.message}`);
    } else {
      // Server-side errors -  TODO: revisar cómo se sacan los valores si hay más d eun error
      if (apiError.status === 422 && apiError.error.errors) {
        const errors = apiError.error.errors;
        var errorMessages : any = [];

        for (const propiedad in errors) {
          if (Object.prototype.hasOwnProperty.call(errors, propiedad)) {
            const elemento = errors[propiedad];
            errorMessages.push(elemento); 
          }
        }
        // return valores;
      // return throwError(() => `Error Code: ${apiError.status}\nMessages: ${errorMessages}`);
      return throwError(() => ({
        errorCode: apiError.status,
        messages: errorMessages
      }));
    }
    return throwError(() => ({
      errorCode: apiError.status,
      messages: errorMessages
    }));    }
  }
  
}
