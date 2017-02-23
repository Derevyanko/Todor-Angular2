import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { FacebookService, FacebookInitParams, FacebookLoginResponse } from 'ng2-facebook-sdk';

import { HttpService } from '../_services/http.service';
import { HttpAddUserService } from '../_services/http-add-user.service';
import { GeneratePwdService } from '../_services/generate-pwd.service';
import { AddUser } from '../_models/adduser';
import 'rxjs/add/operator/toPromise';

declare const gapi: any;

@Component({
	selector: 'fb-gplus-api',
	template: `
		<div class="fb-gplus-api">
			<button type="submit" class="btn btn-fb" (click)="loginFB()">Log in with Facebook</button>
			<button class="btn btn-gplus" id="googleBtn">Sign up with Google +</button>
		</div>
	`,
	providers: [HttpAddUserService, GeneratePwdService, HttpService]
})
export class FbGplusApiComponent implements AfterViewInit {

	constructor(private fb: FacebookService,
				private httpReg: HttpAddUserService,
				private randomPas: GeneratePwdService,
				private router: Router,
				private httpLogin: HttpService) {
		let fbParams: FacebookInitParams = {
			appId: '221102408303069', // your-app-id
			xfbml: true,
			version: 'v2.6'
		};
		this.fb.init(fbParams);
	}

	/* Log in Facebook */
	loginFB() {
		this.fb.login({enable_profile_selector: true, return_scopes: true, scope: 'email'})
			.then((res: FacebookLoginResponse) => {
				if (res.status === 'connected') {
					this.fb.api('me?fields=id,name,email')
						.then(res => {
							let pwd = this.randomPas.generatePwd(8);
							let dog = res.email.indexOf('@');
							let user: AddUser = new AddUser();
							user.uid = res.email.slice(0, dog);
							user.emailid = res.email;
							user.name = res.name;
							user.pwd = pwd;
							console.log(user);
							return user;
						})
						.then(obj => {
							this.httpReg.postData(obj)
								.toPromise()
								.then(resp => {
									if (resp) {
										this.httpLogin.login({"uid": obj.uid,"pwd": obj.pwd})
											.then(data => {
												if (data) {
													alert("Login success! Have a nice day!");
													this.router.navigate(['/search']);
												} else {
													alert("User is not registered!");
													this.router.navigate(['/signin']);
												}
											});
									}
								})
								.catch(error => console.log("ERROR: ", error));
						})
				} else if (res.status === 'not_authorized') {
					console.log('We are not logged in.');
				} else {
					console.log('We are not logged into Facebook.');
				}
			})
			.catch(error => { console.log(error); });
	}

	/* Log in Google+ */
	public auth2: any;
	public googleInit() {
		gapi.load('auth2', () => {
			this.auth2 = gapi.auth2.init({
				client_id: '349221323855-92j9r4muhqh4ncos5qdp6dpmml6kqp3n.apps.googleusercontent.com',	// your-app-id
				cookiepolicy: 'single_host_origin',
				scope: 'profile email'
			});
			this.attachSignin(document.getElementById('googleBtn'));
		});
	}

	public attachSignin(element) {
		this.auth2.attachClickHandler(element, {},
			(googleUser) => {
				let profile = googleUser.getBasicProfile();
				let user: AddUser = new AddUser();
				let pwd = this.randomPas.generatePwd(8);
				let dog = profile.getEmail().indexOf('@');
				user.uid = profile.getEmail().slice(0, dog);
				user.emailid = profile.getEmail();
				user.name = profile.getName();
				user.pwd = pwd;
				console.log(user);
				this.httpReg.postData(user)
					.toPromise()
					.then(resp => {
						if (resp) {
							this.httpLogin.login({"uid": user.uid,"pwd": user.pwd})
								.then(data => {
									if (data) {
										alert("Login success! Have a nice day!");
										this.router.navigate(['/search']);
									} else {
										alert("User is not registered!");
										this.router.navigate(['/signin']);
									}
								});
						}
					})
					.catch(error => console.log("ERROR: ", error));
			}, 
			(error) => {
				alert(JSON.stringify(error, undefined, 2));
			}
		);
	}

	ngAfterViewInit(){
		this.googleInit();
	}
}