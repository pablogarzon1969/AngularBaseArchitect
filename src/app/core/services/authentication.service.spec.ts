import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthFacade } from '../../store/facade/auth/auth.facade';
import { StoreModule } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { generateManyUsers } from 'src/app/shared/models/user.mock';
import { environment } from 'src/environments/environment';
import { BasicAuthInterceptor} from 'src/app/core/interceptors/basic-auth.interceptor'
import { HttpStatusCode, HTTP_INTERCEPTORS } from '@angular/common/http';

describe('AuthenticationService', () => {
    let authenticationService: AuthenticationService;
    let authFacade: AuthFacade;
    let httpController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                HttpClientTestingModule,
                RouterTestingModule],
            providers: [
                AuthenticationService,      
                AuthFacade,
                {
                    provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true
                }
            
            ]
        });

        authenticationService = TestBed.inject(AuthenticationService);
        httpController = TestBed.inject(HttpTestingController);
        authFacade = TestBed.inject(AuthFacade);
    });

    afterEach(() => {
        httpController.verify();
    });

    it('should be create', () => {
        expect(AuthenticationService).toBeTruthy();
    });


    describe('Login Test', () => {
        it('post login', (doneFn) => {
            //arrange
            const mockData: User[] = generateManyUsers(1);
            const username: string = 'pablo';
            const password: string = '1030531969'
            //Act
            authenticationService.login(username, password)
                .subscribe(data => {
                    //Assert
                    expect(data).toEqual(mockData);
                    doneFn();
                });

            const url = `${environment.apiUrl}/users/authenticate`;
            const req = httpController.expectOne(url);
            const header = req.request.headers;
            //expect(header.get('Authorixation')).toEqual('Bearer 123');
            expect(req.request.body).toEqual({ username: username, password: password });
            expect(req.request.method).toEqual('POST');
            req.flush(mockData);
        });
    });
});