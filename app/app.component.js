System.register(['@angular/core', './_services/http.service', './_services/http-add-user.service'], function(exports_1, context_1) {
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
    var core_1, http_service_1, http_add_user_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (http_add_user_service_1_1) {
                http_add_user_service_1 = http_add_user_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: [" \n        .active a {\n        color:#fff;\n        }\n    "],
                        template: " <header>\n        <div class=\"logo\">\n          <a routerLink=\"/search\"> <img src=\"../img/logo@2x.png\" alt=\"logo\"/></a>\n        </div>\n        <nav>\n          <ul>\n            <li routerLinkActive=\"active\"><a routerLink=\"/about\">About</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"/contact_us\" >Contact us</a></li>\n            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a routerLink=\"/login\" class=\"loginLink\" >Log in</a>\n            </li>\n            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a routerLink=\"\" class=\"signLink\" >Sign in </a>\n            </li>\n            <!--<li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">-->\n                <!--<a routerLink=\"/bprofile\" class=\"loginLink\" >Log in</a>-->\n            <!--</li>-->\n            <!--<li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">-->\n                <!--<a routerLink=\"/uprofile\" class=\"signLink\" >Sign in </a>-->\n            <!--</li>-->\n          </ul>\n        </nav>\n      </header>\n    <router-outlet></router-outlet> ",
                        providers: [http_service_1.HttpService, http_add_user_service_1.HttpAddUserService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map