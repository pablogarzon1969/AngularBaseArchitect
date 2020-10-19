import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';

// modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { RouterModule } from '@angular/router';

// guards
import { AuthGuard } from './auth.guard';
import { fakeBackendProvider } from './fake-backend';
import { BasicAuthInterceptor } from './interceptors/basic-auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';


// components
import { LayoutModule } from './layout/layout.module';


// services
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AuthFacade } from '../store/facade/auth/auth.facade';



@NgModule({
  imports: [
    HttpClientModule,
    /* RouterModule,*/
    LayoutModule
  ],
  exports: [
    LayoutModule
  ],
  declarations: [
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    AuthFacade,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider


  ]
})
export class CoreModule {
}
