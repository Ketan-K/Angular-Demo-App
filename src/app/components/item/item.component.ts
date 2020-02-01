import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html"
})
export class ItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() public name: string;
  @Input() public description: string;
  @Input() public price: number;
  @Input() public image: string;
}
