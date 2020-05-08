import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}
  register(user) {
    return this.http.post<any>("https://ketan-express-app.herokuapp.com/user/register", user);
  }
  getUsersList() {
    return this.http.get<any>("https://ketan-express-app.herokuapp.com/user/list");
  }
}
