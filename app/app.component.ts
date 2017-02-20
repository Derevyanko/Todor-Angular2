import {Component, DoCheck} from '@angular/core';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-app',
    styles: [` 
        .active a {
        color:#fff;
        }
    `],
    templateUrl: './app.component.html'

})
export class AppComponent implements DoCheck {
    logged: boolean = true;

    changeMenuLink() {
        if (localStorage.getItem("currentUser")) {
            this.logged = false;
        }
    }

    ngDoCheck() {
        this.changeMenuLink();
    }

    closeMenu() {
        var clientHeight = document.documentElement.clientHeight;
        const navMenu = $('#navigation-menu');
        const menuHeight = $('#navigation-menu').outerHeight();
        const headerHeight = $('header').height();
        const linkActive = $('li');
        $('.label-toggle').addClass('label-toggle-click');

        navMenu.toggle(function () {
            let menuClose = $('#navigation-menu').css('display');
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

            } else if (menuClose == 'none') {
                $('.label-toggle').removeClass('label-toggle-click');
                $('.wrapper').height('auto');
                $('.wrapper').css('overflow', 'auto');
                console.log('test display none');
            }
        });

        $(window).resize(function () {
            let menuC = $('#navigation-menu').css('display');
            let width = $(window).width();
            console.log(width);
            if (width > 768) {
                $('#navigation-menu').css('display', 'flex');
                console.log(width + 'if');
            } else if( width < 768 && menuC == 'block') {
                $('.label-toggle').removeClass('label-toggle-click');
                    console.log('width < 768 && menuC == block');
            } else {
                    $('#navigation-menu').css('display', 'none');
            }
        });
    }
}