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
				clientId="locify-test-c9420"
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
			appId: '221102408303069', // your-app-id
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
							let dog = res.email.indexOf('@');
							let user: AddUser = new AddUser();
							user.uid = res.email.slice(0, dog);
							user.emailid = res.email;
							user.name = res.name;
							user.pwd = pwd;
							console.log('User: ', user);
							return user;
						})
						.then(obj => {
							this.httpReg.postData(obj)
								.subscribe(
									data => {
										alert("Sign up success! Login: " +obj.uid+ " Password: " +obj.pwd+ " Welcome, my friend!");
										this.router.navigate(['/login']);
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
	onGoogleSignInSuccess(event: GoogleSignInSuccess) {
	    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
	    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
	    let pwd = this.randomPas.generatePwd(8);
	    let dog = profile.getEmail().indexOf('@');
	    let user: AddUser = new AddUser();
	    user.uid = profile.getEmail().slice(0, dog);
	    user.emailid = profile.getEmail();
	    user.name = profile.getName();
	    user.pwd = pwd;
	    console.log("user_gp: ", user);
	    
	    /*this.httpReg.postData(user)
	    	.subscribe(
	    		data => {
	    			alert("Log in success! Welcome " + data.username + "!");
					this.router.navigate(['/search']);
	    		},
	    		error => {
	    			alert("Sign in is not success. Repeat please.");
	    	});*/
	}
}