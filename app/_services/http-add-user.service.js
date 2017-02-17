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
    var core_1, http_1, Observable_1;
    var HttpAddUserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            HttpAddUserService = (function () {
                function HttpAddUserService(http) {
                    this.http = http;
                }
                HttpAddUserService.prototype.postData = function (obj) {
                    var body = JSON.stringify(obj);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post('http://104.196.125.63:9000/api/adduser', body, { headers: headers })
                        .map(function (resp) { return resp.json(); })
                        .catch(function (error) { return Observable_1.Observable.throw(error); });
                };
                HttpAddUserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpAddUserService);
                return HttpAddUserService;
            }());
            exports_1("HttpAddUserService", HttpAddUserService);
        }
    }
});
//# sourceMappingURL=http-add-user.service.js.map