import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TokenInterceptor } from "./services/token.interceptor";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ItemComponent } from "./components/item/item.component";
import { HomeComponent } from "./components/home/home.component";
import { UserListComponent } from "./components/list-user/list-user.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { AddItemComponent } from "./components/add-item/add-item.component";
import { AddCategoryComponent } from "./components/add-category/add-category.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    ItemComponent,
    HomeComponent,
    ChangePasswordComponent,
    AddItemComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
