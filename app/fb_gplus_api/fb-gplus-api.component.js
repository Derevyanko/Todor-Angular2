System.register(['@angular/core', '@angular/router', 'ng2-facebook-sdk', '../_services/social-login.service', '../_services/generate-token.service', '../_models/social-login', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, router_1, ng2_facebook_sdk_1, social_login_service_1, generate_token_service_1, social_login_1;
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
            function (social_login_service_1_1) {
                social_login_service_1 = social_login_service_1_1;
            },
            function (generate_token_service_1_1) {
                generate_token_service_1 = generate_token_service_1_1;
            },
            function (social_login_1_1) {
                social_login_1 = social_login_1_1;
            },
            function (_1) {}],
        execute: function() {
            FbGplusApiComponent = (function () {
                function FbGplusApiComponent(fb, httpToken, randomToken, router, zone) {
                    this.fb = fb;
                    this.httpToken = httpToken;
                    this.randomToken = randomToken;
                    this.router = router;
                    this.zone = zone;
                    var fbParams = {
                        appId: '219595158509433',
                        xfbml: true,
                        version: 'v2.6'
                    };
                    this.fb.init(fbParams);
                }
                /* Log in Facebook */
                FbGplusApiComponent.prototype.loginFB = function () {
                    var _this = this;
                    this.fb.login({ enable_profile_selector: true, return_scopes: true, scope: 'email' })
                        .then(function (res) {
                        var access_token = res.authResponse.accessToken;
                        if (res.status === 'connected') {
                            _this.fb.api('me?fields=id,name,email')
                                .then(function (res) {
                                var objFB = {
                                    name: res.name,
                                    uid: res.id,
                                    emailid: res.email,
                                    access_token: access_token
                                };
                                return objFB;
                            })
                                .then(function (obj) {
                                var userToken = new social_login_1.SocialLogin();
                                userToken.uid = obj.uid;
                                userToken.token = obj.access_token;
                                _this.httpToken.postToken(userToken)
                                    .toPromise()
                                    .then(function (resp) {
                                    if (resp.status === 'OK') {
                                        _this.checkStatus(obj);
                                    }
                                })
                                    .catch(function (error) { return console.log("ERROR: ", error); });
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
                FbGplusApiComponent.prototype.googleInit = function () {
                    var _this = this;
                    gapi.load('auth2', function () {
                        _this.auth2 = gapi.auth2.init({
                            client_id: '309462390088-gjbirnlkpg403h9oph93sngsir4jigna.apps.googleusercontent.com',
                            cookiepolicy: 'single_host_origin',
                            scope: 'profile email'
                        });
                        _this.attachSignin(document.getElementById('googleBtn'));
                    });
                };
                FbGplusApiComponent.prototype.attachSignin = function (element) {
                    var _this = this;
                    this.auth2.attachClickHandler(element, {}, function (googleUser) {
                        _this.zone.run(function () {
                            var profile = googleUser.getBasicProfile();
                            var objGP = {
                                name: profile.getName(),
                                uid: profile.getId(),
                                emailid: profile.getEmail()
                            };
                            var userToken = new social_login_1.SocialLogin();
                            userToken.uid = profile.getId();
                            userToken.token = googleUser.getAuthResponse().id_token;
                            _this.httpToken.postToken(userToken)
                                .toPromise()
                                .then(function (resp) {
                                if (resp.status === 'OK') {
                                    _this.checkStatus(objGP);
                                }
                            });
                        });
                    });
                };
                FbGplusApiComponent.prototype.checkStatus = function (userInfo) {
                    var token = this.randomToken.generateToken(40);
                    localStorage.setItem('currentUser', JSON.stringify({ uid: userInfo.uid, name: userInfo.name, emailid: userInfo.emailid, token: token, auth: "social" }));
                    this.router.navigate(['/search']);
                };
                FbGplusApiComponent.prototype.ngAfterViewInit = function () {
                    this.googleInit();
                };
                FbGplusApiComponent = __decorate([
                    core_1.Component({
                        selector: 'fb-gplus-api',
                        template: "\n\t\t<div class=\"fb-gplus-api\">\n\t\t\t<button type=\"submit\" class=\"btn btn-fb\" (click)=\"loginFB()\">Log in with Facebook</button>\n\t\t\t<button class=\"btn btn-gplus\" id=\"googleBtn\">Sign up with Google +</button>\n\t\t</div>\n\t",
                        providers: [generate_token_service_1.GenerateTokenService, social_login_service_1.SocialLoginService]
                    }), 
                    __metadata('design:paramtypes', [ng2_facebook_sdk_1.FacebookService, social_login_service_1.SocialLoginService, generate_token_service_1.GenerateTokenService, router_1.Router, core_1.NgZone])
                ], FbGplusApiComponent);
                return FbGplusApiComponent;
            }());
            exports_1("FbGplusApiComponent", FbGplusApiComponent);
        }
    }
});
//# sourceMappingURL=fb-gplus-api.component.js.map