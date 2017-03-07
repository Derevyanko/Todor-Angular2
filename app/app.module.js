System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', './app.routing', 'mydatepicker', './_directives/alert.component', './uploader/uploader.component', './_guards/guards', './app.component', './_directives/equal-validator.directive', './register/authorization-form.component', './login/login-form.component', './search_page/search-page.component', './about_page/about-page.component', './contact_us/contact-us-page.component', './not_found/not-found.component', './user_profile/user-profile.component', './business_profile/business-profile.component', './fb_gplus_api/fb-gplus-api.component', 'ng2-facebook-sdk'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, app_routing_1, mydatepicker_1, alert_component_1, uploader_component_1, guards_1, app_component_1, equal_validator_directive_1, authorization_form_component_1, login_form_component_1, search_page_component_1, about_page_component_1, contact_us_page_component_1, not_found_component_1, user_profile_component_1, business_profile_component_1, fb_gplus_api_component_1, ng2_facebook_sdk_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (mydatepicker_1_1) {
                mydatepicker_1 = mydatepicker_1_1;
            },
            function (alert_component_1_1) {
                alert_component_1 = alert_component_1_1;
            },
            function (uploader_component_1_1) {
                uploader_component_1 = uploader_component_1_1;
            },
            function (guards_1_1) {
                guards_1 = guards_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (equal_validator_directive_1_1) {
                equal_validator_directive_1 = equal_validator_directive_1_1;
            },
            function (authorization_form_component_1_1) {
                authorization_form_component_1 = authorization_form_component_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (search_page_component_1_1) {
                search_page_component_1 = search_page_component_1_1;
            },
            function (about_page_component_1_1) {
                about_page_component_1 = about_page_component_1_1;
            },
            function (contact_us_page_component_1_1) {
                contact_us_page_component_1 = contact_us_page_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (user_profile_component_1_1) {
                user_profile_component_1 = user_profile_component_1_1;
            },
            function (business_profile_component_1_1) {
                business_profile_component_1 = business_profile_component_1_1;
            },
            function (fb_gplus_api_component_1_1) {
                fb_gplus_api_component_1 = fb_gplus_api_component_1_1;
            },
            function (ng2_facebook_sdk_1_1) {
                ng2_facebook_sdk_1 = ng2_facebook_sdk_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            app_routing_1.ROUTING,
                            mydatepicker_1.MyDatePickerModule
                        ],
                        declarations: [
                            alert_component_1.AlertComponent,
                            equal_validator_directive_1.EqualValidator,
                            app_component_1.AppComponent,
                            login_form_component_1.LoginFormComponent,
                            authorization_form_component_1.AuthorizationFormComponent,
                            search_page_component_1.SearchPageComponent,
                            about_page_component_1.AboutPageComponent,
                            contact_us_page_component_1.ContactUsPageComponent,
                            not_found_component_1.NotFoundComponent,
                            user_profile_component_1.UserProfileComponent,
                            business_profile_component_1.BusinessProfileComponent,
                            uploader_component_1.UploaderFileComponent,
                            fb_gplus_api_component_1.FbGplusApiComponent
                        ],
                        providers: [
                            guards_1.AuthGuard,
                            ng2_facebook_sdk_1.FacebookService
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map