import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "./services/authentication.service";

@Component({ selector: "app-root", templateUrl: "app.component.html" })
export class AppComponent {
  currentUser: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout().subscribe();
    localStorage.removeItem("username");
    localStorage.removeItem("authToken");
    this.router.navigate(["/login"]);
  }
}
