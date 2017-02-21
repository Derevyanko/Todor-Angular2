System.register(['@angular/core', '@angular/router', 'ng2-facebook-sdk', '../_services/http-add-user.service', '../_services/generate-pwd.service', '../_models/adduser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ng2_facebook_sdk_1, http_add_user_service_1, generate_pwd_service_1, adduser_1;
    var FbGplusApiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_facebook_sdk_1_1) {
                ng2_facebook_sdk_1 = ng2_facebook_sdk_1_1;
            },
            function (http_add_user_service_1_1) {
                http_add_user_service_1 = http_add_user_service_1_1;
            },
            function (generate_pwd_service_1_1) {
                generate_pwd_service_1 = generate_pwd_service_1_1;
            },
            function (adduser_1_1) {
                adduser_1 = adduser_1_1;
            }],
        execute: function() {
            FbGplusApiComponent = (function () {
                function FbGplusApiComponent(fb, httpReg, randomPas, router) {
                    this.fb = fb;
                    this.httpReg = httpReg;
                    this.randomPas = randomPas;
                    this.router = router;
                    var fbParams = {
                        appId: '221102408303069',
                        xfbml: true,
                        version: 'v2.6'
                    };
                    this.fb.init(fbParams);
                }
                /* Log in Facebook */
                FbGplusApiComponent.prototype.loginFB = function () {
                    var _this = this;
                    this.fb.login()
                        .then(function (res) {
                        if (res.status === 'connected') {
                            console.log('We are connected.');
                            var accessToken = res.authResponse.accessToken;
                            _this.fb.api('me?fields=id,name,email')
                                .then(function (res) {
                                var pwd = _this.randomPas.generatePwd(8);
                                var dog = res.email.indexOf('@');
                                var user = new adduser_1.AddUser();
                                user.uid = res.email.slice(0, dog);
                                user.emailid = res.email;
                                user.name = res.name;
                                user.pwd = pwd;
                                console.log('User: ', user);
                                return user;
                            })
                                .then(function (obj) {
                                _this.httpReg.postData(obj)
                                    .subscribe(function (data) {
                                    alert("Sign up success! Login: " + obj.uid + " Password: " + obj.pwd + " Welcome, my friend!");
                                    _this.router.navigate(['/login']);
                                }, function (error) {
                                    alert("Log in is not success. Repeat please.");
                                });
                            });
                        }
                        else if (res.status === 'not_authorized') {
                            console.log('We are not logged in.');
                        }
                        else {
                            console.log('We are not logged into Facebook.');
                        }
                    })
                        .catch(function (error) { console.log(error); });
                };
                /* Log in Google+ */
                FbGplusApiComponent.prototype.onGoogleSignInSuccess = function (event) {
                    var googleUser = event.googleUser;
                    var profile = googleUser.getBasicProfile();
                    var pwd = this.randomPas.generatePwd(8);
                    var dog = profile.getEmail().indexOf('@');
                    var user = new adduser_1.AddUser();
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
                };
                FbGplusApiComponent = __decorate([
                    core_1.Component({
                        selector: 'fb-gplus-api',
                        template: "\n\t\t<div class=\"fb-gplus-api\">\n\t\t\t<button type=\"submit\" class=\"btn btn-fb\" (click)=\"loginFB()\">Log in with Facebook</button>\n\t\t\t<google-signin\n\t\t\t\tclientId=\"locify-test-c9420.apps.googleusercontent.com\"\n\t\t\t\twidth=\"300\"\n\t\t\t\ttheme=\"dark\"\n\t\t\t\tscope=\"email profile\"\n\t\t\t\tlongTitle=\"true\"\n\t\t\t\t(googleSignInSuccess)=\"onGoogleSignInSuccess($event)\">\n\t\t\t</google-signin>\n\t\t</div>\n\t",
                        providers: [http_add_user_service_1.HttpAddUserService, generate_pwd_service_1.GeneratePwdService]
                    }), 
                    __metadata('design:paramtypes', [ng2_facebook_sdk_1.FacebookService, http_add_user_service_1.HttpAddUserService, generate_pwd_service_1.GeneratePwdService, router_1.Router])
                ], FbGplusApiComponent);
                return FbGplusApiComponent;
            }());
            exports_1("FbGplusApiComponent", FbGplusApiComponent);
        }
    }
});
//# sourceMappingURL=fb-gplus-api.component.js.map