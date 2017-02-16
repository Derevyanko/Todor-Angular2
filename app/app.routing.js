System.register(["@angular/router", "./_guards/guards", "./register/authorization-form.component", "./login/login-form.component", "./search_page/search-page.component", "./not_found/not-found.component", "./user_profile/user-profile.component", "./business_profile/business-profile.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, guards_1, authorization_form_component_1, login_form_component_1, search_page_component_1, not_found_component_1, user_profile_component_1, business_profile_component_1, appRoutes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (guards_1_1) {
                guards_1 = guards_1_1;
            },
            function (authorization_form_component_1_1) {
                authorization_form_component_1 = authorization_form_component_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            },
            function (search_page_component_1_1) {
                search_page_component_1 = search_page_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (user_profile_component_1_1) {
                user_profile_component_1 = user_profile_component_1_1;
            },
            function (business_profile_component_1_1) {
                business_profile_component_1 = business_profile_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', redirectTo: '/search', pathMatch: 'full' },
                { path: 'search', component: search_page_component_1.SearchPageComponent },
                //canActivate: [AuthGuard] },
                { path: 'uprofile', component: user_profile_component_1.UserProfileComponent, canActivate: [guards_1.AuthGuard] },
                { path: 'bprofile', component: business_profile_component_1.BusinessProfileComponent, canActivate: [guards_1.AuthGuard] },
                { path: 'signin', component: authorization_form_component_1.AuthorizationFormComponent },
                { path: 'login', component: login_form_component_1.LoginFormComponent },
                { path: '**', component: not_found_component_1.NotFoundComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
            /**
             * Created by D on 26.01.2017.
             */
        }
    };
});
//# sourceMappingURL=app.routing.js.map