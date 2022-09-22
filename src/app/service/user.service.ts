import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
constructor(private httpClient: HttpClient) {}

getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      'http://localhost:8082/users'
    );
  }
  addUser(user: User): Observable<User>{
    return this.httpClient.post<User>(
        'http://localhost:8082/user',user
    ).pipe(catchError(this.handleError));
  }

getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(
      'http://localhost:8082/user/' + userId
    );
  }

  updateUser(userId: number, admin: User): Observable<Object> {
    return this.httpClient.put(
      'http://localhost:8082/user' + userId,
    admin
    );
  }

deleteUser(userId: number): Observable<Object> {
    return this.httpClient.delete(
      'http://localhost:8082/user/' + userId
    );
  }

handleError(error: HttpErrorResponse) {

if (error.status === 0) {

 // A client-side or network error occurred. Handle it accordingly.

console.error('An error occurred:', error.error);

} else {

// The backend returned an unsuccessful response code.

// The response body may contain clues as to what went wrong.
console.error(
`Backend returned code ${error.status}, body was: `, error.error);

}
// Return an observable with a user-facing error message.
return throwError(() => new Error('Something bad happened; please try again later.'));
}
}