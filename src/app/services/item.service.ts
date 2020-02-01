import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItemList() {
    return this.http.get<any>("http://localhost:8080/item/list");
  }

  addItem(item) {
    return this.http.post<any>("http://localhost:8080/item/add", item);
  }
}
