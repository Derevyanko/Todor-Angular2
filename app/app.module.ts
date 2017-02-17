import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}   from '@angular/http';
import {ROUTING}        from './app.routing';

import {UploaderFileComponent} from './uploader/uploader.component'
import {AuthGuard} from './_guards/guards';
import {AppComponent}  from './app.component';
import {EqualValidator} from './_directives/equal-validator.directive';
import {AuthorizationFormComponent} from './register/authorization-form.component';
import {LoginFormComponent} from './login/login-form.component';
import {SearchPageComponent} from './search_page/search-page.component';
import {NotFoundComponent} from './not_found/not-found.component';
import {UserProfileComponent} from './user_profile/user-profile.component';
import {BusinessProfileComponent} from './business_profile/business-profile.component';
import {FbGplusApiComponent} from './fb_gplus_api/fb-gplus-api.component';
import {GoogleSignInComponent} from 'angular-google-signin';

import { FacebookService } from 'ng2-facebook-sdk';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ROUTING
    ],
    declarations: [
        EqualValidator,
        AppComponent,
        LoginFormComponent,
        AuthorizationFormComponent,
        SearchPageComponent,
        NotFoundComponent,
        UserProfileComponent,
        BusinessProfileComponent,
        UploaderFileComponent,
        FbGplusApiComponent,
        GoogleSignInComponent
    ],
    providers: [
        AuthGuard,
        FacebookService
    ],

    bootstrap: [AppComponent]
})
export class AppModule {}