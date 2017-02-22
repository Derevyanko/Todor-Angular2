import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import {
    NgForm,
    FORM_DIRECTIVES,
    REACTIVE_FROM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';
import { HttpService } from '../_services/http.service';
import { User } from '../_models/user';

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    providers: [HttpService]
})
export class LoginFormComponent implements OnInit {
    user: User = new User();

    constructor(
        private httpService: HttpService,
        private router: Router) {}

    ngOnInit() {
        this.httpService.logout();
    }
    
    login(user){
        this.httpService.login(user)
            .then(
                data => {
                    if (data) {
                        alert("Login success! Have a nice day!");
                        this.router.navigate(['/search']);
                    } else {
                        alert("User is not registered!");
                        this.router.navigate(['/signin']);
                    }
                }
            );
    }
}