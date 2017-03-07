System.register(['@angular/core', '@angular/router', '../_models/adduser', '../_services/alert.service', '../_services/http-add-user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, adduser_1, alert_service_1, http_add_user_service_1;
    var AuthorizationFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (adduser_1_1) {
                adduser_1 = adduser_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            },
            function (http_add_user_service_1_1) {
                http_add_user_service_1 = http_add_user_service_1_1;
            }],
        execute: function() {
            AuthorizationFormComponent = (function () {
                function AuthorizationFormComponent(httpAddUserService, router, alertService) {
                    this.httpAddUserService = httpAddUserService;
                    this.router = router;
                    this.alertService = alertService;
                    this.user = new adduser_1.AddUser();
                }
                AuthorizationFormComponent.prototype.submit = function (user) {
                    var _this = this;
                    this.httpAddUserService.postData(user)
                        .subscribe(function (data) {
                        _this.alertService.success('Registration successful', true);
                        setTimeout(function () {
                            _this.router.navigate(['/login']);
                        }, 3000);
                    }, function (error) {
                        _this.alertService.error(error);
                    });
                };
                AuthorizationFormComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'authorization-form',
                        templateUrl: 'authorization-form.component.html',
                        providers: [http_add_user_service_1.HttpAddUserService, alert_service_1.AlertService]
                    }), 
                    __metadata('design:paramtypes', [http_add_user_service_1.HttpAddUserService, router_1.Router, alert_service_1.AlertService])
                ], AuthorizationFormComponent);
                return AuthorizationFormComponent;
            }());
            exports_1("AuthorizationFormComponent", AuthorizationFormComponent);
        }
    }
});
//# sourceMappingURL=authorization-form.component.js.map