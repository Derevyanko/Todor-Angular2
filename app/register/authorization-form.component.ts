import { Component } from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';

import { AddUser } from '../_models/adduser';
import { AlertService } from '../_services/alert.service';
import { HttpAddUserService } from '../_services/http-add-user.service';

@Component({
  moduleId: module.id,
  selector: 'authorization-form',
  templateUrl: 'authorization-form.component.html',
  providers: [HttpAddUserService, AlertService]
})
export class  AuthorizationFormComponent {

  user: AddUser = new AddUser();

  constructor(
    private httpAddUserService: HttpAddUserService,
    private router: Router,
    private alertService: AlertService) {}

  submit(user) {
    this.httpAddUserService.postData(user)
        .subscribe(
          data => {
            this.alertService.success('Registration successful', true);
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 3000);
          },
          error => {
            this.alertService.error(error);
          });
  }
}