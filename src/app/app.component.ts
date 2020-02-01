import { Component } from "@angular/core";
import { Router } from "@angular/router";
import "bootstrap/dist/js/bootstrap.bundle";

import { AuthenticationService } from "./services/authentication.service";
import { CategoryService } from "./services/category.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  currentUser: any;
  categoryList: any;
  isAdmin: any;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private CategoryService: CategoryService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
    this.authenticationService.userRole.subscribe(x => {
      this.isAdmin = x === "admin";
    });

    this.CategoryService.getList().subscribe(
      data => (this.categoryList = data.list)
    );
  }

  logout() {
    this.authenticationService.logout().subscribe(() => {
      localStorage.clear();
    });
    this.router.navigate(["/login"]);
  }
}
