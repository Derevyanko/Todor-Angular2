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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.logged = true;
                }
                AppComponent.prototype.changeMenuLink = function () {
                    if (localStorage.getItem("currentUser")) {
                        this.logged = false;
                    }
                };
                AppComponent.prototype.ngDoCheck = function () {
                    this.changeMenuLink();
                };
                AppComponent.prototype.closeMenu = function () {
                    var clientHeight = document.documentElement.clientHeight;
                    var navMenu = $('#navigation-menu');
                    var menuHeight = $('#navigation-menu').outerHeight();
                    var headerHeight = $('header').height();
                    var linkActive = $('li');
                    $('.label-toggle').addClass('label-toggle-click');
                    navMenu.toggle(function () {
                        var menuClose = $('#navigation-menu').css('display');
                        linkActive.click(function () {
                            navMenu.css('display', 'none');
                            $('.label-toggle').removeClass('label-toggle-click');
                            $('.wrapper').height('auto');
                            $('body').css('overflow', 'visible');
                        });
                        if (menuClose == 'block') {
                            $('body').css('overflow', 'hidden');
                            $('nav ul').css('height', '100%');
                            $('nav ul').css('position', 'fixed');
                        }
                        else if (menuClose == 'none') {
                            $('.label-toggle').removeClass('label-toggle-click');
                            $('body').css('overflow', 'visible');
                            $('nav ul').css('height', 'auto');
                            $('nav ul').css('position', 'relative');
                        }
                    });
                    $(window).resize(function () {
                        var menuC = $('#navigation-menu').css('display');
                        var width = $(window).width();
                        if (width > 768) {
                            $('#navigation-menu').css('display', 'flex');
                            $('body').css('overflow', 'visible');
                            $('nav ul').css('height', 'auto');
                            $('nav ul').css('position', 'relative');
                        }
                        else if (width < 768 && menuC == 'block') {
                            $('nav ul').css('height', '100%');
                            $('nav ul').css('position', 'fixed');
                        }
                        else if (width < 768) {
                            $('.label-toggle').removeClass('label-toggle-click');
                            $('#navigation-menu').css('display', 'none');
                        }
                        else {
                            $('#navigation-menu').css('display', 'none');
                        }
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        selector: 'my-app',
                        templateUrl: './app.component.html',
                        styles: [" \n        .active a {\n        color:#fff;\n        }\n    "]
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