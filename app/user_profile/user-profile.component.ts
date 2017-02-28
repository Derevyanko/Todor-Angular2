import { Component, OnInit } from '@angular/core';
import {
    NgForm,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';
import { GetUserinfoService } from '../_services/get-userinfo.service';
import { AddUser } from '../_models/adduser';

@Component({
    moduleId: module.id,
    selector: 'user-profile',
    templateUrl: 'user-profile.component.html',
    providers: [GetUserinfoService]
})
export class UserProfileComponent implements OnInit {
	user: AddUser = new AddUser();

	currentUser = JSON.parse(localStorage.getItem('currentUser'));

	constructor(private getInfo: GetUserinfoService) {}

	ngOnInit() {
		if (localStorage.getItem('currentUser') && this.currentUser.auth === "native") {
			this.getInfo.getUserInfo(this.currentUser.uid)
				.subscribe(data => {
					this.user.name = data.name;
					this.user.uid = data.uid;
					this.user.emailid = data.emailid;
				});
		} else if (localStorage.getItem('currentUser') && this.currentUser.auth === "social") {
			let dog = this.currentUser.emailid.indexOf("@");
			this.user.uid = this.currentUser.emailid.slice(0, dog);
			this.user.name = this.currentUser.name;
			this.user.emailid = this.currentUser.emailid;
		}
	}
}