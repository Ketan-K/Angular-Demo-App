import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CategoryService } from "src/app/services/category.service";
import { first } from "rxjs/operators";
import { ItemService } from "src/app/services/item.service";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: []
})
export class AddItemComponent implements OnInit {
  addItemForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  success: string;
  selected: any;

  constructor(
    private formBuilder: FormBuilder,
    private CategoryService: CategoryService,
    private ItemService: ItemService
  ) {
    this.CategoryService.getList().subscribe(
      data => (this.categories = data.list)
    );
  }
  categories: Array<any>;

  ngOnInit() {
    this.submitted = false;
    this.addItemForm = this.formBuilder.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      description: ["", Validators.required],
      categoryCode: ["", Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.addItemForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.error = "";
    this.success = "";
    // stop here if form is invalid
    if (this.addItemForm.invalid) {
      return;
    }
    this.loading = true;
    this.ItemService.addItem(this.addItemForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status == 0) {
            this.success = "New Item Added Successfully";
          } else {
            this.error = data.message;
          }
          this.loading = false;
          this.ngOnInit();
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
