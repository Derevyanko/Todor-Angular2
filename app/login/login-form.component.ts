import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import {
    NgForm,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';
import { HttpService } from '../_services/http.service';
import { AlertService } from '../_services/alert.service';
import { User } from '../_models/user';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    providers: [HttpService, AlertService]
})
export class LoginFormComponent implements OnInit {
    user: User = new User();

    constructor(
        private httpService: HttpService,
        private router: Router,
        private alertService: AlertService) {}

    ngOnInit() {
        this.httpService.logout();
    }
    
    login(user){
        this.httpService.login(user)
            .then(
                data => {
                    if (data) {
                        this.router.navigate(['/search']);
                    } else {
                        this.alertService.error('Error: Username or password is incorrect', true);
                    }
                }
            );
    }
}