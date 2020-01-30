import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() public role: string;
  @Input() public username: string;
  @Input() public price: number;
}
