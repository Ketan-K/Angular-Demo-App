import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ValueConverter } from "@angular/compiler/src/render3/view/template";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  private userRoleSubject: BehaviorSubject<any>;

  public currentUser: Observable<any>;
  public userRole: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("username"))
    );
    this.userRoleSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("role"))
    );

    this.currentUser = this.currentUserSubject.asObservable();
    this.userRole = this.userRoleSubject.asObservable();
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
      .post<any>("https://ketan-express-app.herokuapp.com/user/login", { username, password })
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
            localStorage.setItem("role", JSON.stringify(response.user.role));
            this.currentUserSubject.next(response.user.username);
            this.userRoleSubject.next(response.user.role);

            return response;
          }
          return new Error(response.message);
        })
      );
  }

  logout() {
    this.currentUserSubject.next(null);
    return this.http.delete<any>("https://ketan-express-app.herokuapp.com/user/logout");
  }
}
