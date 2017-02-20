import { Component } from '@angular/core';
import { AddUser } from '../_models/adduser';
import { HttpAddUserService } from '../_services/http-add-user.service';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'authorization-form',
  templateUrl: 'authorization-form.component.html',
  providers: [HttpAddUserService]
})
export class  AuthorizationFormComponent {

  user: AddUser = new AddUser();

  constructor(
    private httpAddUserService: HttpAddUserService,
    private router: Router) {}

  submit(user) {
    this.httpAddUserService.postData(user)
        .subscribe(
          data => {
            alert("Sign up success! Welcome " + user.name + "!");
            this.router.navigate(['/search']);
          },
          error => {
            alert("Registration is not success. Repeat please.");
          });
  }
}