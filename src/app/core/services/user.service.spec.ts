import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';


import { User } from 'src/app/shared/models/user.model';
import { generateManyUsers } from 'src/app/shared/models/user.mock';


describe('UserService', () => {
  let service: UserService;
  let httpController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule],
    });
    service = TestBed.inject(UserService);
    httpController = TestBed.inject(HttpTestingController);
  }));

  afterEach(() => {
    httpController.verify();
  });

  it(`should issue a request users service`,
    // 1. declare as async test since the HttpClient works with Observables
    waitForAsync(
      // 2. inject HttpClient and HttpTestingController into the test
      inject([HttpTestingController], (backend: HttpTestingController) => {
        // 3. send a simple request
        service.getAll()
          .subscribe(result => {
            expect(3).toBe(3);
          });

        const req = backend.expectOne(`${environment.apiUrl}/users`);
        expect(req.request.url).toBe(`${environment.apiUrl}/users`);

        req.flush({
          incomplete_results: false,
          items: [{}, {}],
          total_count: 2
        });
      })
    )
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });


  describe('test for GetAll', () => {
    it('Should return a user list', (doneFn) => {
      //Arrange
      const mockData: User[] = generateManyUsers(1);
      //Act
      service.getAll()
        .subscribe((data) => {
          //Assert
          expect(data.length).toEqual(mockData.length);
          expect(data).toEqual(mockData);
          doneFn();
        });

      //http config
      const url = `${environment.apiUrl}/users`;
      const req = httpController.expectOne(url);
      req.flush(mockData);
      expect(req.request.method).toEqual('GET');
    });
  });
});
