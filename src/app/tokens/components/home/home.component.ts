import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {TokenService} from "../../../services/token.service";
import {TokenModel} from "../../../models/token.model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {ActionEvent, AppDataState, DataStateEnum, TokenActionTypes} from "../../../state/token.state";

import {Router} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  token$:Observable<AppDataState<TokenModel[]>> | null = null
  constructor(private tokensService : TokenService,private router:Router) { }
  readonly DataStateEnum = DataStateEnum;


  ngOnInit():void {
    this.OnGetAllToken()
  }


  OnGetAllToken() {
    this.token$ = this.tokensService.getAllTokens().pipe(
      map((data) =>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }


  OnSearch(dataForm: any) {
    this.token$ = this.tokensService.searchToken(dataForm.keyword).pipe(
      map((data)=> ({dataState : DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }



  onDelete(p: TokenModel) {
    let v = confirm("do you want to delete ?")
    if(v)
      this.tokensService.deleteToken(p).subscribe(
        data=>{
          this.OnGetAllToken();
        }
      )
  }



  OnActionEvent($event: ActionEvent) {
    switch ($event.type){
      case TokenActionTypes.GET_ALL_TOKEN:this.OnGetAllToken();break;
      case TokenActionTypes.SEARCH_TOKEN:this.OnSearch($event.payload);break;
      case TokenActionTypes.DELETE_TOKEN:this.onDelete($event.payload);break;
      // case TokenActionTypes.GET_TOKEN:this.OnGetTokenById($event.payload);break;
    }
  }
}
