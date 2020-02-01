import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  success: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      password: ["", Validators.required],
      newpassword: ["", Validators.required],
      confirmnewpassword: ["", [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.changePasswordForm.controls;
  }
  public matchValues() {
    console.log(this.f.newpassword === this.f.confirmnewpassword);
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    // reset alerts on submit
    this.error = null;

    // stop here if form is invalid
    if (this.changePasswordForm.invalid) {
      this.error = "Please Fill Form";
      return;
    } else this.success = "Password Updated Successfully";
    this.loading = false;
  }
}
