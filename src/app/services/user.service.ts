import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}
  baseURL: "http://localhost:8080/user";
  register(user) {
    return this.http.post<any>("http://localhost:8080/user/register", user);
  }
  getUsersList() {
    return this.http.get<any>("http://localhost:8080/user/list");
  }
}
