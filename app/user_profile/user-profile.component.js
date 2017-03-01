System.register(['@angular/core', '../_services/get-userinfo.service', '../_models/adduser'], function(exports_1, context_1) {
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
    var core_1, get_userinfo_service_1, adduser_1;
    var UserProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (get_userinfo_service_1_1) {
                get_userinfo_service_1 = get_userinfo_service_1_1;
            },
            function (adduser_1_1) {
                adduser_1 = adduser_1_1;
            }],
        execute: function() {
            UserProfileComponent = (function () {
                function UserProfileComponent(getInfo) {
                    this.getInfo = getInfo;
                    this.user = new adduser_1.AddUser();
                    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                }
                UserProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (localStorage.getItem('currentUser') && this.currentUser.auth === "native") {
                        this.getInfo.getUserInfo(this.currentUser.uid)
                            .subscribe(function (data) {
                            _this.user.name = data.name;
                            _this.user.uid = data.uid;
                            _this.user.emailid = data.emailid;
                        });
                    }
                    else if (localStorage.getItem('currentUser') && this.currentUser.auth === "social") {
                        var dog = this.currentUser.emailid.indexOf("@");
                        this.user.uid = this.currentUser.emailid.slice(0, dog);
                        this.user.name = this.currentUser.name;
                        this.user.emailid = this.currentUser.emailid;
                    }
                };
                UserProfileComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'user-profile',
                        templateUrl: 'user-profile.component.html',
                        providers: [get_userinfo_service_1.GetUserinfoService]
                    }), 
                    __metadata('design:paramtypes', [get_userinfo_service_1.GetUserinfoService])
                ], UserProfileComponent);
                return UserProfileComponent;
            }());
            exports_1("UserProfileComponent", UserProfileComponent);
        }
    }
});
//# sourceMappingURL=user-profile.component.js.map