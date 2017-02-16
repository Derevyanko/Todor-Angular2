System.register(["@angular/core", "../_models/adduser", "../_services/http-add-user.service", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, adduser_1, http_add_user_service_1, router_1, AuthorizationFormComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (adduser_1_1) {
                adduser_1 = adduser_1_1;
            },
            function (http_add_user_service_1_1) {
                http_add_user_service_1 = http_add_user_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            AuthorizationFormComponent = (function () {
                function AuthorizationFormComponent(httpAddUserService, router) {
                    this.httpAddUserService = httpAddUserService;
                    this.router = router;
                    this.user = new adduser_1.AddUser();
                }
                AuthorizationFormComponent.prototype.submit = function (user) {
                    var _this = this;
                    this.httpAddUserService.postData(user)
                        .subscribe(function (data) {
                        alert("Signin success! Welcome " + user.username + "!");
                        _this.router.navigate(['/login']);
                    }, function (error) {
                        alert("Registration is not success. Repeat please.");
                    });
                };
                return AuthorizationFormComponent;
            }());
            AuthorizationFormComponent = __decorate([
                core_1.Component({
                    moduleId: module.id,
                    selector: 'authorization-form',
                    templateUrl: 'authorization-form.component.html',
                    providers: [http_add_user_service_1.HttpAddUserService]
                }),
                __metadata("design:paramtypes", [http_add_user_service_1.HttpAddUserService,
                    router_1.Router])
            ], AuthorizationFormComponent);
            exports_1("AuthorizationFormComponent", AuthorizationFormComponent);
        }
    };
});
//# sourceMappingURL=authorization-form.component.js.map