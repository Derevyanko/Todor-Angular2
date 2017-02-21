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
				$('body').css('overflow', 'visible');
            });
            if (menuClose == 'block') {					// Opened menu
                $('body').css('overflow', 'hidden');
                $('nav ul').css('height', '100%');
				$('nav ul').css('position', 'fixed');

                console.log('test display block');

            } else if (menuClose == 'none') {			// Closed menu
                $('.label-toggle').removeClass('label-toggle-click');
				$('body').css('overflow', 'visible');
				$('nav ul').css('height', 'auto');
				$('nav ul').css('position', 'relative');
                console.log('test display none');
            }
        });

        $(window).resize(function () {
            let menuC = $('#navigation-menu').css('display');
            let width = $(window).width();
            console.log(width);
            if (width > 768) {
                $('#navigation-menu').css('display', 'flex');
                $('body').css('overflow', 'visible');
				$('nav ul').css('height', 'auto');
				$('nav ul').css('position', 'relative');
                console.log(width + 'if');
            } else if( width < 768 && menuC == 'block') {
                $('nav ul').css('height', '100%');
				$('nav ul').css('position', 'fixed');
                    console.log('width < 768 && menuC == block');
            } else if( width < 768 ) {
                $('.label-toggle').removeClass('label-toggle-click');
				$('#navigation-menu').css('display', 'none');
            } else {
                    $('#navigation-menu').css('display', 'none');
            }
        });
    }
}