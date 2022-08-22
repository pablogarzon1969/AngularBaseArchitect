import { TestBed, inject } from '@angular/core/testing';
import { BasicAuthInterceptor } from './basic-auth.interceptor';
import { Router } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
  } from '@angular/common/http/testing';
  import { AuthFacade } from '../../store/facade/auth/auth.facade';
  import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';


const RouterMock = {
    navigateByUrl() {
      return Promise.resolve(true);
    }
  };

describe('TokenInterceptor',() => {
    let http: HttpClient;
    let httpController: HttpTestingController;

    beforeEach(() => {
        spyOn(RouterMock, 'navigateByUrl');
        TestBed.configureTestingModule({
            imports: [ StoreModule.forRoot({}),HttpClientTestingModule],
            providers: [
                AuthFacade,
                { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
                { provide: Router, useValue: RouterMock }
            ]
      });

      httpController = TestBed.inject(HttpTestingController);
      http = TestBed.get(HttpClient);
    });

    afterEach(() => {
        httpController.verify();
    });

    it('should add Authorization header to request', () => {
        http.get(`${environment.apiUrl}`).subscribe(response => expect(response).toBeTruthy());
        const req = httpController.expectOne(`${environment.apiUrl}`);
        const header = req.request.headers;

        expect(req.request.headers.get('Authorization')).toBeTruthy();
        expect(req.request.headers.get('Authorization')).toBe('Bearer token');  
      });

      it('shouldnt add Authorization header to request', () => {
        // given
        const url = `${environment.apiUrl}`;
        http.get(url).subscribe(response => expect(response).toBeTruthy());
        const request = httpController.expectOne(url);
    
        // then
        expect(request.request.headers.get('Authorization')).toBeNull();
    
        // when
        request.flush({});
      });  
});