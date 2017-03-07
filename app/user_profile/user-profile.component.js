System.register(['@angular/core', '../_services/alert.service', '../_services/get-userinfo.service', '../_services/update-user-info.service', '../_models/updateuser'], function(exports_1, context_1) {
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
    var core_1, alert_service_1, get_userinfo_service_1, update_user_info_service_1, updateuser_1;
    var UserProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            },
            function (get_userinfo_service_1_1) {
                get_userinfo_service_1 = get_userinfo_service_1_1;
            },
            function (update_user_info_service_1_1) {
                update_user_info_service_1 = update_user_info_service_1_1;
            },
            function (updateuser_1_1) {
                updateuser_1 = updateuser_1_1;
            }],
        execute: function() {
            UserProfileComponent = (function () {
                function UserProfileComponent(getInfo, updateUserInfo, alertService) {
                    this.getInfo = getInfo;
                    this.updateUserInfo = updateUserInfo;
                    this.alertService = alertService;
                    this.myDatePickerOptions = {
                        dateFormat: 'mm/dd/yyyy',
                        selectionTxtFontSize: '16px'
                    };
                    this.user = new updateuser_1.UpdateUser();
                    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                }
                UserProfileComponent.prototype.onDateChanged = function (event) {
                    event.date;
                };
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
                        this.user.name = this.currentUser.name;
                        this.user.uid = this.currentUser.emailid.slice(0, dog);
                        this.user.emailid = this.currentUser.emailid;
                    }
                };
                UserProfileComponent.prototype.update = function (user) {
                    var _this = this;
                    this.updateUserInfo.updateInfo(user)
                        .subscribe(function (data) {
                        _this.alertService.success("Data updated successfully!", true);
                    }, function (error) {
                        _this.alertService.error("Updated data failed!", true);
                    });
                };
                UserProfileComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'user-profile',
                        templateUrl: 'user-profile.component.html',
                        providers: [get_userinfo_service_1.GetUserinfoService, update_user_info_service_1.UpdateUserInfoService, alert_service_1.AlertService]
                    }), 
                    __metadata('design:paramtypes', [get_userinfo_service_1.GetUserinfoService, update_user_info_service_1.UpdateUserInfoService, alert_service_1.AlertService])
                ], UserProfileComponent);
                return UserProfileComponent;
            }());
            exports_1("UserProfileComponent", UserProfileComponent);
        }
    }
});
//# sourceMappingURL=user-profile.component.js.map