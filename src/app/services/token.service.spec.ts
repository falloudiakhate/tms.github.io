import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environment/environment';
import { TokenModel } from '../models/token.model';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[TokenService]
    });
    service = TestBed.inject(TokenService);
    httpMock = TestBed.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all tokens', () => {
    const dummyTokens: TokenModel[] = [
      { id: 1, name: 'Token1', content: 'content1', owner: 'Owner1', description: 'Description1', created_date: new Date(), collections: [] },
      { id: 2, name: 'Token2', content: 'content2', owner: 'Owner2', description: 'Description2', created_date: new Date(), collections: [] },
    ];

    service.getAllTokens().subscribe(tokens => {
      expect(tokens.length).toBe(2);
      expect(tokens).toEqual(dummyTokens);
    });

    const req = httpMock.expectOne(`${environment.hostname}/tokens`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyTokens);
  });

  it('should retrieve a token by ID', () => {
    const dummyToken: TokenModel = { id: 1, name: 'Token1', content: 'content1', owner: 'Owner1', description: 'Description1', created_date: new Date(), collections: [] };

    service.getTokenById(1).subscribe(token => {
      expect(token).toEqual(dummyToken);
    });

    const req = httpMock.expectOne(`${environment.hostname}/tokens/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyToken);
  });

  it('should return an Observable of TokenModel[]', () => {
    const dummyTokens: TokenModel[] = [
      { id: 1, name: 'Token1', content: 'content1', owner: 'Owner1', description: 'Description1', created_date: new Date(), collections: [] },
      { id: 2, name: 'Token2', content: 'content2', owner: 'Owner2', description: 'Description2', created_date: new Date(), collections: [] },
    ];

    service.searchToken('Token').subscribe(tokens => {
      expect(tokens.length).toBe(2);
      expect(tokens).toEqual(dummyTokens);
    });

    const req = httpMock.expectOne(`${environment.hostname}/tokens?name_like=Token`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyTokens);
  });
  
  it('should return an Observable of void', () => {
    const dummyToken: TokenModel = { id: 1, name: 'Token1', content: 'content1', owner: 'Owner1', description: 'Description1', created_date: new Date(), collections: [] };

    service.deleteToken(dummyToken).subscribe(res => {
      expect(res).toBeNull();
    });

    const req = httpMock.expectOne(`${environment.hostname}/tokens/1`);
    req.flush(null);
  });

  it('should return an Observable of TokenModel', () => {
    const dummyToken: TokenModel = { id: 1, name: 'Token1', content: 'content1', owner: 'Owner1', description: 'Description1', created_date: new Date(), collections: [] };
    service.saveToken(dummyToken).subscribe(token => {
      expect(token).toEqual(dummyToken);
    });
  
    const req = httpMock.expectOne(`${environment.hostname}/tokens/`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyToken);
  });

  it('should return an Observable of TokenModel', () => {
    const dummyToken: TokenModel = { id: 1, name: 'Token1', content: 'content1', owner: 'Owner1', description: 'Description1', created_date: new Date(), collections: [] };
    service.updateToken(dummyToken).subscribe(token => {
      expect(token).toEqual(dummyToken);
    });
  
    const req = httpMock.expectOne(`${environment.hostname}/tokens/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummyToken);
  });
  
});
