System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, GeneratePwdService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            GeneratePwdService = (function () {
                function GeneratePwdService() {
                }
                GeneratePwdService.prototype.generatePwd = function (len) {
                    var result = '';
                    var words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
                    var max_position = words.length - 1;
                    for (var i = 0; i < len; i++) {
                        var position = Math.floor(Math.random() * max_position);
                        result = result + words.substring(position, position + 1);
                    }
                    return result;
                };
                return GeneratePwdService;
            }());
            GeneratePwdService = __decorate([
                core_1.Injectable()
            ], GeneratePwdService);
            exports_1("GeneratePwdService", GeneratePwdService);
        }
    };
});
//# sourceMappingURL=generate-pwd.service.js.map