import {Component, DoCheck} from '@angular/core';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [` 
        .active a {
        color:#fff;
        }
    `]
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

            } else if (menuClose == 'none') {			// Closed menu
                $('.label-toggle').removeClass('label-toggle-click');
				$('body').css('overflow', 'visible');
				$('nav ul').css('height', 'auto');
				$('nav ul').css('position', 'relative');
            }
        });

        $(window).resize(function () {
            let menuC = $('#navigation-menu').css('display');
            let width = $(window).width();
            if (width > 768) {
                $('#navigation-menu').css('display', 'flex');
                $('body').css('overflow', 'visible');
				$('nav ul').css('height', 'auto');
				$('nav ul').css('position', 'relative');
            } else if( width < 768 && menuC == 'block') {
                $('nav ul').css('height', '100%');
				$('nav ul').css('position', 'fixed');
            } else if( width < 768 ) {
                $('.label-toggle').removeClass('label-toggle-click');
				$('#navigation-menu').css('display', 'none');
            } else {
                    $('#navigation-menu').css('display', 'none');
            }
        });
    }
}