import { TestBed } from '@angular/core/testing';

import { CollectionService } from './collection.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CollectionModel } from '../models/collection.model';
import { TokenModel } from '../models/token.model';
import { environment } from '../../environment/environment';
import { of } from 'rxjs';

describe('CollectionService', () => {
  let service: CollectionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CollectionService]
    });
    service = TestBed.inject(CollectionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all collections', () => {
    const mockCollections: CollectionModel[] = [
      { id: 1, name: 'Collection 1', icon: 'icon1', list_token: [] },
      { id: 2, name: 'Collection 2', icon: 'icon2', list_token: [] },
    ];

    service.getAllCollection().subscribe((collections: CollectionModel[]) => {
      expect(collections.length).toBe(2);
      expect(collections).toEqual(mockCollections);
    });

    const req = httpMock.expectOne(`${environment.hostname}/collections`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCollections);
  });
   

  it('should retrieve a collection by ID', () => {
    const mockCollection: CollectionModel = {
      id: 1,
      name: 'Collection 1',
      icon: 'icon1',
      list_token: [],
    };

    service.getCollectionById(mockCollection.id).subscribe((collection: CollectionModel) => {
      expect(collection).toEqual(mockCollection);
    });

    const req = httpMock.expectOne(`${environment.hostname}/collections/${mockCollection.id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCollection);
  });

   
  it('should return an Observable of void', () => {
    const dummyCollection: CollectionModel = {id: 1, name: 'collection1', icon: 'icon1', list_token: [1, 2]};

    service.deleteCollection(dummyCollection).subscribe(() => {
      expect().nothing();
    });

    const req = httpMock.expectOne(`${environment.hostname}/collections/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  }); 

  it('should return an Observable of CollectionModel', () => {
    const dummyCollection: CollectionModel = {id: 1, name: 'collection1', icon: 'icon1', list_token: [1, 2]};

    service.saveCollection(dummyCollection).subscribe(collection => {
      expect(collection).toEqual(dummyCollection);
    });

    const req = httpMock.expectOne(`${environment.hostname}/collections/`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyCollection);
  });

  it('should update a collection', () => {
    const collection: CollectionModel = {
      id: 1,
      name: 'Collection 1',
      icon: 'icon-1',
      list_token: [1, 2, 3],
    };
    const updatedCollection: CollectionModel = {
      id: 1,
      name: 'Updated Collection 1',
      icon: 'icon-1',
      list_token: [1, 2],
    };

    service.updateCollection(collection).subscribe((result) => {
      expect(result).toEqual(updatedCollection);
    });

    const req = httpMock.expectOne(`${environment.hostname}/collections/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedCollection);
  });

});
