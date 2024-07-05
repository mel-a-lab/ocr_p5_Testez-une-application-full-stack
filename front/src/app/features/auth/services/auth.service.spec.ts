import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({ // Ajoutez cette ligne pour importer HttpClientTestingModule
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a token on login', (done) => {
    spyOn(service, 'login').and.returnValue(of({ token: 'mockToken' }));
    service.login({ email: 'yoga@studio.com', password: 'test!1234' }).subscribe(loginResponse => {
      expect(loginResponse).toEqual({ token: 'mockToken' });
      done();
    });
  });
});
