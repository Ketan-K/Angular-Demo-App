import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<any>("https://ketan-express-app.herokuapp.com/category/list");
  }
}
