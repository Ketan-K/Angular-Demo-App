import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./helper/auth.guard";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { UserListComponent } from "./components/list-user/list-user.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { AddItemComponent } from "./components/add-item/add-item.component";
import { AddCategoryComponent } from "./components/add-category/add-category.component";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "listusers", component: UserListComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "add-item", component: AddItemComponent },
  { path: "add-category", component: AddCategoryComponent },

  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
