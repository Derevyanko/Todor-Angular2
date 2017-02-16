import { Component } from '@angular/core';
import { GoogleSignInSuccess } from 'angular-google-signin';
import { Router } from '@angular/router';
import { FacebookService, FacebookInitParams, FacebookLoginResponse } from 'ng2-facebook-sdk';
import { HttpAddUserService } from '../_services/http-add-user.service';
import { GeneratePwdService } from '../_services/generate-pwd.service';
import { AddUser } from '../_models/adduser';

@Component({
	selector: 'fb-gplus-api',
	template: `
		<div class="fb-gplus-api">
			<button type="submit" class="btn btn-fb" (click)="loginFB()">Log in with Facebook</button>
			<google-signin
				clientId="309462390088-gjbirnlkpg403h9oph93sngsir4jigna.apps.googleusercontent.com"
				width="300"
				theme="dark"
				scope="email profile"
				longTitle="true"
				(googleSignInSuccess)="onGoogleSignInSuccess($event)">
			</google-signin>
		</div>
	`,
	providers: [HttpAddUserService, GeneratePwdService]
})
export class FbGplusApiComponent {

	constructor(private fb: FacebookService,
				private httpReg: HttpAddUserService,
				private randomPas: GeneratePwdService,
				private router: Router) {
		let fbParams: FacebookInitParams = {
			appId: '219595158509433', // your-app-id
			xfbml: true,
			version: 'v2.6'
		};
		this.fb.init(fbParams);
	}

	/* Log in Facebook */
	loginFB() {
		this.fb.login()
			.then((res: FacebookLoginResponse) => {
				if (res.status === 'connected') {
					console.log('We are connected.');
					let accessToken = res.authResponse.accessToken;
					this.fb.api('me?fields=id,name,email')
						.then(res => {
							let pwd = this.randomPas.generatePwd(8);
							let user: AddUser = new AddUser();
							user.username = res.name;
							user.email = res.email;
							user.password = pwd;
							user.confirmPassword = pwd;
							console.log('User-temp: ', user);
							return user;
						})
						.then(obj => {
							console.log('User1: ', obj);
							this.httpReg.postData(obj)
								.subscribe(
									data => {
										alert("Log in success! Welcome " + data.username + "!");
										this.router.navigate(['/search']);
									},
									error => {
									  alert("Log in is not success. Repeat please.");
								});
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
	private myClientId: string = '309462390088-gjbirnlkpg403h9oph93sngsir4jigna.apps.googleusercontent.com';

	onGoogleSignInSuccess(event: GoogleSignInSuccess) {
	    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
	    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
	    let pwd = this.randomPas.generatePwd(8);
	    let user: AddUser = new AddUser();
	    user.username = profile.getName();
	    user.email = profile.getEmail();
	    user.password = pwd;
	    user.confirmPassword = pwd;
	    console.log("user_gp: ", user);
	    this.httpReg.postData(user)
	    	.subscribe(
	    		data => {
	    			alert("Log in success! Welcome " + data.username + "!");
					this.router.navigate(['/search']);
	    		},
	    		error => {
	    			alert("Sign in is not success. Repeat please.");
	    	});
	}
}