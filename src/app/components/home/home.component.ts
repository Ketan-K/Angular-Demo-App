import { Component, OnInit } from "@angular/core";
import { ItemService } from "src/app/services/item.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private ItemService: ItemService, private router: Router) {}

  items: Observable<any[]>;

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.ItemService.getItemList()
      .pipe(first())
      .subscribe(data => {
        this.items = data.list;
      });
  }
}
