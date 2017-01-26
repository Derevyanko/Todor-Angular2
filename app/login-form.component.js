System.register(['@angular/core', './http.service', './user'], function(exports_1, context_1) {
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
    var core_1, http_service_1, user_1;
    var LoginFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent(httpService) {
                    this.httpService = httpService;
                    // model: any = {};
                    this.user = new user_1.User();
                    this.done = false;
                }
                LoginFormComponent.prototype.submit = function (user) {
                    var _this = this;
                    this.httpService.postData(user)
                        .subscribe(function (data) { _this.done = data.loggedIn; });
                    alert("Login success! Have a nice day!");
                    // this.Routes.navigate(['']);
                    // window.location.href = "";
                    console.log(this.done);
                };
                LoginFormComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'login-form',
                        templateUrl: 'login-form.component.html',
                        providers: [http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], LoginFormComponent);
                return LoginFormComponent;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
/**
 * Created by D on 18.01.2017.
 */ 
//# sourceMappingURL=login-form.component.js.map