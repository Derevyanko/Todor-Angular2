System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/observable/throw'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            HttpService = (function () {
                function HttpService(http) {
                    this.http = http;
                }
                /*login(obj: User) {
                    const body = JSON.stringify(obj);
                    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
            
                    let promise = new Promise((resolve, reject) => {
                        this.http.post('http://104.196.125.63:9000/api/signin', body, { headers: headers })
                            .subscribe(
                                resp => {
                                    let token = resp.json() && resp.json().token;
                                    if (token) {
                                        this.token = token;
                                        localStorage.setItem('currentUser', JSON.stringify({uid: obj.uid, token: token}));
                                        resolve(true);
                                    } else {
                                        reject(new Error('Login or Password is not correct!'));
                                    }
                                });
                    });
            
                    return promise
                            .then(response => {
                                if (response) {
                                    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                                    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
                                    this.http.post('http://104.196.125.63:9000/api/sendtoken', currentUser, { headers: headers })
                                        .subscribe(
                                            data => {
                                                if (data.status === 200) {
                                                    console.log("Status OK");
                                                }
                                            },
                                            err => alert("Error")
                                        );
                                }
                            })
                            .catch(error => alert('Error: ' + error.message));
                }*/
                HttpService.prototype.login = function (obj) {
                    var _this = this;
                    var body = JSON.stringify(obj);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
                    return this.http.post('http://104.196.125.63:9000/api/signin', body, { headers: headers })
                        .toPromise()
                        .then(function (response) {
                        var token = response.json() && response.json().token;
                        if (token) {
                            _this.token = token;
                            localStorage.setItem('currentUser', JSON.stringify({ uid: obj.uid, token: token }));
                            return true;
                        }
                    })
                        .then(function (bool) {
                        if (bool) {
                            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                            return _this.http.post('http://104.196.125.63:9000/api/sendtoken', currentUser, { headers: headers });
                        }
                    });
                    /*.then(data => {
                        if (data.status === 200) {
                            console.log("Status OK");
                        }
                    })
                    .catch(error => alert("Error: " + error));*/
                };
                HttpService.prototype.logout = function () {
                    this.token = null;
                    localStorage.removeItem('currentUser');
                };
                HttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpService);
                return HttpService;
            }());
            exports_1("HttpService", HttpService);
        }
    }
});
//# sourceMappingURL=http.service.js.map