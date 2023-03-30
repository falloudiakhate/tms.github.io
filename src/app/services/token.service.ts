import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TokenModel} from "../models/token.model";
import {Observable} from "rxjs";
import {environment} from "../../environment/environment";


@Injectable({providedIn:"root"})
export class TokenService{
  constructor(private http:HttpClient) {
  }

  getAllTokens():Observable<TokenModel[]>{
    let host= environment.hostname
    return this.http.get<TokenModel[]>(`${host}/tokens`)
  }

  getTokenById(id:number):Observable<TokenModel>{
    let host= environment.hostname
    return this.http.get<TokenModel>(`${host}/tokens/${id}`)
  }

  searchToken(keyword:String):Observable<TokenModel[]>{
    let host = environment.hostname
    return  this.http.get<TokenModel[]>(`${host}/tokens?name_like=${keyword}`)
  }

  deleteToken(token:TokenModel):Observable<void>{
    let host = environment.hostname
    return  this.http.delete<void>(`${host}/tokens/${token.id}`)
  }

  saveToken(token:TokenModel):Observable<TokenModel>{
    let host = environment.hostname
    return  this.http.post<TokenModel>(`${host}/tokens/`,token)
  }

  updateToken(token:TokenModel):Observable<TokenModel>{
    let host = environment.hostname
    return  this.http.put<TokenModel>(`${host}/tokens/${token.id}`,token)
  }

}
