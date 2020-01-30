import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";

@Component({
  selector: "app-user-list",
  templateUrl: "./userlist.component.html",
  styleUrls: ["./userlist.component.css"]
})
export class UserListComponent implements OnInit {
  constructor(private UserService: UserService, private router: Router) {}

  users: Observable<any[]>;

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.UserService.getUsersList()
      .pipe(first())
      .subscribe(data => {
        this.users = data.list;
      });
  }

  updateUser(username) {
    console.log(username);
  }

  deleteUser() {}
}
