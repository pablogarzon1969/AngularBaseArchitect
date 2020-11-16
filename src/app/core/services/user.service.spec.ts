import { async, TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';

describe('NotesComponent', () => {
  let service: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule],
    });
    service = TestBed.inject(UserService);
  }));

  it(`should issue a request users service`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
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
});
