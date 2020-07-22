import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './core/auth/fake-backend';

import { BasicAuthInterceptor } from './core/auth/basic-auth.interceptor';

import { ErrorInterceptor } from './core/auth/error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { LayoutModule } from './core/layout/layout.module';
import { CoreModule } from './core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


//import { HomeComponent } from './home';
import { LoginComponent } from './login';

import { appReducers } from './store/reducers/app.reducer';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    //LayoutModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [
    /*{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
