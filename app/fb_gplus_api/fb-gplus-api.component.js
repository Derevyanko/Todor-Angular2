System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var FbGplusApiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {FacebookService, FacebookInitParams, FacebookLoginResponse} from 'ng2-facebook-sdk';
            FbGplusApiComponent = (function () {
                function FbGplusApiComponent() {
                }
                FbGplusApiComponent = __decorate([
                    core_1.Component({
                        selector: 'fb-gplus-api',
                        template: "\n\t\t<div class=\"fb-gplus-api\">\n\t\t\t<button type=\"submit\" class=\"btn btn-fb\" (click)=\"loginFB()\">Log in with Facebook</button>\n\t\t\t<button type=\"submit\" class=\"btn btn-gplus\">Sign in with Google +</button>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], FbGplusApiComponent);
                return FbGplusApiComponent;
            }());
            exports_1("FbGplusApiComponent", FbGplusApiComponent);
        }
    }
});
//# sourceMappingURL=fb-gplus-api.component.js.map