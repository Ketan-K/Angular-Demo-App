import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, config } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("username"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
  authToken: string;
  getAuthToken() {
    this.authToken = JSON.parse(localStorage.getItem("authToken"));
    return this.authToken ? this.authToken : "";
  }

  login(username, password) {
    return this.http
      .post<any>("http://localhost:8080/user/login", { username, password })
      .pipe(
        map(response => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          if (response.status == 0) {
            localStorage.setItem(
              "username",
              JSON.stringify(response.user.username)
            );
            localStorage.setItem(
              "authToken",
              JSON.stringify(response.user.authToken)
            );
            this.currentUserSubject.next(response.user.username);
            return response;
          }
          return new Error(response.message);
        })
      );
  }

  logout() {
    this.currentUserSubject.next(null);
    return this.http.delete<any>("http://localhost:8080/user/logout");
  }
}
