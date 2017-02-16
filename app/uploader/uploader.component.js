System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, UploaderFileComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            UploaderFileComponent = (function () {
                function UploaderFileComponent() {
                }
                UploaderFileComponent.prototype.readUrl = function (event) {
                    var _this = this;
                    // imageSrc: string = '';
                    if (event.target.files && event.target.files[0]) {
                        var reader = new FileReader();
                        reader.onload = function (event) {
                            _this.url = event.target.result;
                            console.log(_this.url);
                        };
                        reader.readAsDataURL(event.target.files[0]);
                    }
                };
                return UploaderFileComponent;
            }());
            UploaderFileComponent = __decorate([
                core_1.Component({
                    moduleId: module.id,
                    selector: 'uploader',
                    styles: [" \n        uploader-file {\n       width:100%;\n        }\n    "],
                    templateUrl: 'uploader.component.html',
                })
            ], UploaderFileComponent);
            exports_1("UploaderFileComponent", UploaderFileComponent);
            /**
             * Created by D on 01.02.2017.
             */
        }
    };
});
//# sourceMappingURL=uploader.component.js.map