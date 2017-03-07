import { Component, OnInit } from '@angular/core';
import {
    NgForm,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';
import { AlertService } from '../_services/alert.service';
import { GetUserinfoService } from '../_services/get-userinfo.service';
import { UpdateUserInfoService } from '../_services/update-user-info.service';
import { UpdateUser } from '../_models/updateuser';

import {IMyOptions, IMyDateModel} from 'mydatepicker';

@Component({
    moduleId: module.id,
    selector: 'user-profile',
    templateUrl: 'user-profile.component.html',
    providers: [GetUserinfoService, UpdateUserInfoService, AlertService]
})
export class UserProfileComponent implements OnInit {

	private myDatePickerOptions: IMyOptions = {
	    dateFormat: 'mm/dd/yyyy',
	    selectionTxtFontSize: '16px'
	};

	onDateChanged(event: IMyDateModel) {
		event.date;
    }

	user: UpdateUser = new UpdateUser();

	currentUser = JSON.parse(localStorage.getItem('currentUser'));

	constructor(
		private getInfo: GetUserinfoService,
		private updateUserInfo: UpdateUserInfoService,
		private alertService: AlertService) {}

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
			this.user.name = this.currentUser.name;
			this.user.uid = this.currentUser.emailid.slice(0, dog);
			this.user.emailid = this.currentUser.emailid;
		}
	}

	update(user) {
		this.updateUserInfo.updateInfo(user)
			.subscribe(
			    data => {
			    	this.alertService.success("Data updated successfully!", true);
			    },
			    error => {
			    	this.alertService.error("Updated data failed!", true);
			    });
	}
}