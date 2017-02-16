System.register(["@angular/core", "./_services/http.service", "@angular/common"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_service_1, common_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(location) {
                    this.location = location;
                    var logged;
                    var path = location.path();
                    console.log(path);
                    if (path === "/uprofile") {
                        this.logged = true;
                    }
                    else if (path === "/bprofile") {
                        this.logged = true;
                    }
                    else {
                        this.logged = false;
                    }
                }
                AppComponent.prototype.closeMenu = function () {
                    var clientHeight = document.documentElement.clientHeight;
                    var navMenu = $('#navigation-menu');
                    var menuHeight = $('#navigation-menu').outerHeight();
                    var headerHeight = $('header').height();
                    var linkActive = $('li');
                    $('.label-toggle').addClass('label-toggle-click');
                    navMenu.toggle(function () {
                        var menuClose = $('#navigation-menu').css('display');
                        console.log(menuClose + ' test');
                        linkActive.click(function () {
                            navMenu.css('display', 'none');
                            $('.label-toggle').removeClass('label-toggle-click');
                            $('.wrapper').height('auto');
                        });
                        if (menuClose == 'block') {
                            $('.wrapper').height(menuHeight + headerHeight);
                            $('.wrapper').css('overflow', 'hidden');
                            console.log('test display block');
                        }
                        else if (menuClose == 'none') {
                            $('.label-toggle').removeClass('label-toggle-click');
                            $('.wrapper').height('auto');
                            $('.wrapper').css('overflow', 'auto');
                            console.log('test display none');
                        }
                    });
                    $(window).resize(function () {
                        var menuC = $('#navigation-menu').css('display');
                        var width = $(window).width();
                        console.log(width);
                        if (width > 768) {
                            $('#navigation-menu').css('display', 'flex');
                            console.log(width + 'if');
                        }
                        else if (width < 768 && menuC == 'block') {
                            $('.label-toggle').removeClass('label-toggle-click');
                            console.log('width < 768 && menuC == block');
                        }
                        else {
                            $('#navigation-menu').css('display', 'none');
                        }
                    });
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    moduleId: module.id,
                    selector: 'my-app',
                    styles: [" \n        .active a {\n        color:#fff;\n        }\n    "],
                    templateUrl: './app.component.html',
                    providers: [http_service_1.HttpService, http_service_1.HttpService]
                }),
                __metadata("design:paramtypes", [common_1.Location])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map