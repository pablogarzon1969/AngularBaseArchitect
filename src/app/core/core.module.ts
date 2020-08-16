import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';

// modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { RouterModule } from '@angular/router';

// guards
import { AuthGuard } from './auth/auth.guard';
import { fakeBackendProvider } from './auth/fake-backend';
import { BasicAuthInterceptor } from './auth/basic-auth.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';


// components
import { LayoutModule } from './layout/layout.module';


// services
import { AuthenticationService } from './auth/authentication.service';
import { UserService } from './auth/user.service';
import { AuthFacade } from '../store/facade/auth.facade';



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
