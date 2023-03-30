import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {TokenModel} from "../../../../models/token.model";
import {ActionEvent, AppDataState, DataStateEnum, TokenActionTypes} from "../../../../state/token.state";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit{
  @Input() token$:Observable<AppDataState<TokenModel[]>> | null = null
  @Output() tokensEventEmiter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  readonly DataStateEnum = DataStateEnum;


  ngOnInit(): void{
  }

  onSearch(p: any) {
    this.tokensEventEmiter.emit({type:TokenActionTypes.SEARCH_TOKEN,payload:p});
  }

  onDelete(p: TokenModel) {
    this.tokensEventEmiter.emit({type:TokenActionTypes.DELETE_TOKEN,payload:p});
  }

  onGetAll(p:any){
    this.tokensEventEmiter.emit({type:TokenActionTypes.GET_ALL_TOKEN,payload:p})
  }

  onActionEvent($event: ActionEvent) {
    this.tokensEventEmiter.emit($event);
  }

}
