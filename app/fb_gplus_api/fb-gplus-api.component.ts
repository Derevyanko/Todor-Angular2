import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { FacebookService, FacebookInitParams, FacebookLoginResponse } from 'ng2-facebook-sdk';

import { SocialLoginService } from '../_services/social-login.service';
import { GenerateTokenService } from '../_services/generate-token.service';
import { SocialLogin } from '../_models/social-login';
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
	providers: [GenerateTokenService, SocialLoginService]
})
export class FbGplusApiComponent implements AfterViewInit {

	constructor(private fb: FacebookService,
				private httpToken: SocialLoginService,
				private randomToken: GenerateTokenService,
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
		this.fb.login({enable_profile_selector: true, return_scopes: true, scope: 'email'})
			.then((res: FacebookLoginResponse) => {
				let access_token = res.authResponse.accessToken;
				if (res.status === 'connected') {
					this.fb.api('me?fields=id')
						.then(res => {
							let userToken: SocialLogin = new SocialLogin();
							userToken.uid = res.id;
							userToken.token = access_token;
							return userToken;
						})
						.then(obj => {
							this.httpToken.postToken(obj)
								.toPromise()
								.then(resp => {
									if (resp.status === 'OK') {
										this.checkStatus(obj);
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
				client_id: '309462390088-gjbirnlkpg403h9oph93sngsir4jigna.apps.googleusercontent.com',	// your-app-id
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
				let userToken: SocialLogin = new SocialLogin();
				userToken.uid = profile.getId();
				userToken.token = googleUser.getAuthResponse().id_token;
				this.httpToken.postToken(userToken)
					.toPromise()
					.then(resp => {
						if (resp.status === 'OK') {
							this.checkStatus(userToken);
						}
					})
			}, 
			(error) => {
				alert(JSON.stringify(error, undefined, 2));
			}
		);
	}

	checkStatus(user) {
		let token = this.randomToken.generateToken(40);
		localStorage.setItem('currentUser', JSON.stringify({uid: user.uid, token: token}));
		alert("Login success! Have a nice day!");
		this.router.navigate(['/search']);
	}

	ngAfterViewInit(){
		this.googleInit();
	}
}