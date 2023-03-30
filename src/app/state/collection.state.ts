export enum DataStateCollEnum{
  LOADING,
  LOADED,
  ERROR
}

export interface AppCollDataState <T>{
  dataState:DataStateCollEnum,
  data?:T,
  errorMessage?:String
}

export enum CollectionActionTypes{
  GET_ALL_COLLECTION="[Collection] Get All Collection",
  GET_COLLECTION="[Collection] Get Collection By Id",
  NEW_COLLECTION="[Collection] New Collection",
  EDIT_COLLECTION="[Collection] Edit Collection",
  DELETE_COLLECTION="[Collection] Delete Collection",
  GET_ALL_TOKEN_IN_COLLECTION="[Collection] Get All Token in Collection"

}
export interface ActionCollEvent{
  type:CollectionActionTypes,
  payload?:any
}
