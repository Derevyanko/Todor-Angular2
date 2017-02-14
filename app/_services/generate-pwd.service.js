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
    var GeneratePwdService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GeneratePwdService = (function () {
                function GeneratePwdService() {
                }
                GeneratePwdService.prototype.generatePwd = function (len) {
                    var ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                    var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                    var out = '';
                    for (var i = 0; i < len; i++) {
                        var ch = Math.random(1, 2);
                        if (ch < 0.5) {
                            var ch2 = Math.ceil(Math.random(1, ints.length) * 10);
                            out += ints[ch2];
                        }
                        else {
                            var ch2 = Math.ceil(Math.random(1, chars.length) * 10);
                            out += chars[ch2];
                        }
                    }
                    return out;
                };
                GeneratePwdService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], GeneratePwdService);
                return GeneratePwdService;
            }());
            exports_1("GeneratePwdService", GeneratePwdService);
        }
    }
});
//# sourceMappingURL=generate-pwd.service.js.map