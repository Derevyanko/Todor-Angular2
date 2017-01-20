System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/observable/throw'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, Observable_1;
    var HttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            HttpService = (function () {
                function HttpService(http) {
                    this.http = http;
                }
                //http://localhost:8080/angular/setUser.php     PHP
                //http://localhost:51576/api/values/    Web API
                //http://localhost:56473/Home/PostData  ASP NET MVC
                HttpService.prototype.postData = function (obj) {
                    var body = JSON.stringify(obj);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
                    return this.http.post(' http://104.196.125.63:9000/api/signin', body, { headers: headers })
                        .map(function (resp) { return resp.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                HttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], HttpService);
                return HttpService;
                var _a;
            }());
            exports_1("HttpService", HttpService);
        }
    }
});
/**
 * Created by D on 20.01.2017.
 */
//# sourceMappingURL=http.service.js.map