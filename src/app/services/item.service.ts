import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItemList() {
    return this.http.get<any>("https://ketan-express-app.herokuapp.com/item/list");
  }

  addItem(item) {
    return this.http.post<any>("https://ketan-express-app.herokuapp.com/item/add", item);
  }
}
