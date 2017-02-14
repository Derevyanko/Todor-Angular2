import { Component } from '@angular/core';
import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';
import {HttpAddUserService} from '../_services/http-add-user.service';
import {GeneratePwdService} from '../_services/generate-pwd.service';

@Component({
	selector: 'fb-gplus-api',
	template: `
		<div class="fb-gplus-api">
			<button type="submit" class="btn btn-fb" (click)="loginFB()">Log in with Facebook</button>
			<button type="submit" class="btn btn-gplus">Sign in with Google +</button>
		</div>
	`,
	providers: [HttpAddUserService, GeneratePwdService]
})
export class FbGplusApiComponent {

	constructor(private fb: FacebookService, private httpReg: HttpAddUserService, private randomPas: GeneratePwdService) {
		let fbParams: FacebookInitParams = {
			appId: '219595158509433', // your-app-id
			xfbml: true,
			version: 'v2.6'
		};
		this.fb.init(fbParams);
	}

	loginFB() {
		this.fb.login()
			.then((res: FacebookLoginResponse) => {
				if (res.status === 'connected') {
					console.log('We are connected.');
					let accessToken = res.authResponse.accessToken;
					this.fb.api('me?fields=id,name,email')
						.then(res => {
							let pwd = this.randomPas.generatePwd(8);
							console.log(pwd);
							res.password = pwd;
							res.confirmPassword = pwd;
							console.log(res);
							return res;
						})
						.then(obj => {
							console.log(obj);
							this.httpReg.postData(obj);
						});
				} else if (res.status === 'not_authorized') {
					console.log('We are not logged in.');
				} else {
					console.log('We are not logged into Facebook.');
				}
			})
			.catch(error => { console.log(error); });
	}
}