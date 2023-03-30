import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CollectionModel} from "../models/collection.model";
import {TokenModel} from "../models/token.model";
import {forkJoin, map, Observable, switchMap} from "rxjs";
import {environment} from "../../environment/environment";


@Injectable({providedIn:"root"})
export class CollectionService{
  constructor(private http:HttpClient) {
  }

  getAllCollection():Observable<CollectionModel[]>{
    let host= environment.hostname
    return this.http.get<CollectionModel[]>(`${host}/collections`)
  }

  getCollectionById(id:number):Observable<CollectionModel>{
    let host= environment.hostname
    return this.http.get<CollectionModel>(`${host}/collections/${id}`)
  }

  getAllTokenInCollection(collectionId:number):Observable<TokenModel[]>{
    const host = environment.hostname;
    const collection = this.getCollectionById(collectionId)
    const tokensId$: Observable<number[]> = collection.pipe(
      map((collectionData: any) => collectionData.list_token)
    );
    // Use the `switchMap` operator to switch to a new observable that emits the token models
    return tokensId$.pipe(
      switchMap((tokensId: number[]) => {
        // Use `forkJoin` to run multiple requests in parallel and return a single observable that emits an array of responses
        const tokenRequests$: Observable<TokenModel>[] = tokensId.map((tokenId: number) => {
          return this.http.get<TokenModel>(`${host}/tokens/${tokenId}`);
        });
        return forkJoin(tokenRequests$);
      })
    );
  }

  deleteCollection(collection:CollectionModel):Observable<void>{
    let host = environment.hostname
    return  this.http.delete<void>(`${host}/collections/${collection.id}`)
  }

  saveCollection(collection:CollectionModel):Observable<CollectionModel>{
    let host = environment.hostname
    return  this.http.post<CollectionModel>(`${host}/collections/`,collection)
  }


  updateCollection(collection:CollectionModel):Observable<CollectionModel>{
    let host = environment.hostname
    return  this.http.put<CollectionModel>(`${host}/collections/${collection.id}`,collection)
  }


}
