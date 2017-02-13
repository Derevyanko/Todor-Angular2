System.register(['@angular/core', 'ng2-facebook-sdk'], function(exports_1, context_1) {
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
    var core_1, ng2_facebook_sdk_1;
    var FbGplusApiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_facebook_sdk_1_1) {
                ng2_facebook_sdk_1 = ng2_facebook_sdk_1_1;
            }],
        execute: function() {
            FbGplusApiComponent = (function () {
                function FbGplusApiComponent(fb) {
                    this.fb = fb;
                    var fbParams = {
                        appId: '219595158509433',
                        xfbml: true,
                        version: 'v2.6'
                    };
                    this.fb.init(fbParams);
                }
                FbGplusApiComponent.prototype.loginFB = function () {
                    this.fb.login()
                        .then(function (res) {
                        console.log('Logged in', res);
                    })
                        .catch(function (error) { console.log(error); });
                };
                FbGplusApiComponent = __decorate([
                    core_1.Component({
                        selector: 'fb-gplus-api',
                        template: "\n\t\t<div class=\"fb-gplus-api\">\n\t\t\t<button type=\"submit\" class=\"btn btn-fb\" (click)=\"loginFB()\">Log in with Facebook</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-gplus\">Sign in with Google +</button>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [ng2_facebook_sdk_1.FacebookService])
                ], FbGplusApiComponent);
                return FbGplusApiComponent;
            }());
            exports_1("FbGplusApiComponent", FbGplusApiComponent);
        }
    }
});
//# sourceMappingURL=fb-gplus-api.component.js.map