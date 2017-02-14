System.register(['@angular/core', 'ng2-facebook-sdk', '../_services/http-add-user.service', '../_services/generate-pwd.service'], function(exports_1, context_1) {
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
    var core_1, ng2_facebook_sdk_1, http_add_user_service_1, generate_pwd_service_1;
    var FbGplusApiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_facebook_sdk_1_1) {
                ng2_facebook_sdk_1 = ng2_facebook_sdk_1_1;
            },
            function (http_add_user_service_1_1) {
                http_add_user_service_1 = http_add_user_service_1_1;
            },
            function (generate_pwd_service_1_1) {
                generate_pwd_service_1 = generate_pwd_service_1_1;
            }],
        execute: function() {
            FbGplusApiComponent = (function () {
                function FbGplusApiComponent(fb, httpReg, randomPas) {
                    this.fb = fb;
                    this.httpReg = httpReg;
                    this.randomPas = randomPas;
                    var fbParams = {
                        appId: '219595158509433',
                        xfbml: true,
                        version: 'v2.6'
                    };
                    this.fb.init(fbParams);
                }
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
                                console.log(pwd);
                                res.password = pwd;
                                res.confirmPassword = pwd;
                                console.log(res);
                                return res;
                            })
                                .then(function (obj) {
                                console.log(obj);
                                _this.httpReg.postData(obj);
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
                FbGplusApiComponent = __decorate([
                    core_1.Component({
                        selector: 'fb-gplus-api',
                        template: "\n\t\t<div class=\"fb-gplus-api\">\n\t\t\t<button type=\"submit\" class=\"btn btn-fb\" (click)=\"loginFB()\">Log in with Facebook</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-gplus\">Sign in with Google +</button>\n\t\t</div>\n\t",
                        providers: [http_add_user_service_1.HttpAddUserService, generate_pwd_service_1.GeneratePwdService]
                    }), 
                    __metadata('design:paramtypes', [ng2_facebook_sdk_1.FacebookService, http_add_user_service_1.HttpAddUserService, generate_pwd_service_1.GeneratePwdService])
                ], FbGplusApiComponent);
                return FbGplusApiComponent;
            }());
            exports_1("FbGplusApiComponent", FbGplusApiComponent);
        }
    }
});
//# sourceMappingURL=fb-gplus-api.component.js.map