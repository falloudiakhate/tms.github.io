export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState <T>{
  dataState:DataStateEnum,
  data?:T,
  errorMessage?:String
}

export enum TokenActionTypes{
  GET_ALL_TOKEN="[Token] Get All Token",
  GET_TOKEN="[Collection] Get Token By Id",
  SEARCH_TOKEN="[Token] Search Token",
  NEW_TOKEN="[Token] New Token",
  EDIT_TOKEN="[Token] Edit Token",
  DELETE_TOKEN="[Token] Delete Token",
}
export interface ActionEvent{
  type:TokenActionTypes,
  payload?:any
}
