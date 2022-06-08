import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { TodoService } from "../todo.service";
import { Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrls: ["./create-task.component.scss"],
})
export class CreateTaskComponent implements OnInit {
  @Output() updateTasks = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  profileForm = this.fb.group({
    task: ["", Validators.required],
    imageData: [""],
  });
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File | any; // Variable to store file

  ngOnInit(): void {}

  /*B-addOnChange*/

  create() {
    this.loading = !this.loading;
    const formData = new FormData();
    formData.append("task", this.profileForm.value.task);

    /*B-adduploadImage*/

    /*B-modifyTaskName*/
    this.todoService.createTask({task: this.profileForm.value.task}).subscribe(
    /*E-modifyTaskName*/
      (event: any) => {
        if (typeof (event) === 'object') {
            this.shortLink = event.link;
            this.updateTasks.emit();
            this.loading = false;
        }
      });
  }

  parseData(formValue: any) {
    const formData = new FormData();

    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }
    return formData;
  }
}
