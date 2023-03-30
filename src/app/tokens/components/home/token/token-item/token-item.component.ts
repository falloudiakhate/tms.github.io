import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TokenModel} from "../../../../../models/token.model";
import {ActionEvent, TokenActionTypes} from "../../../../../state/token.state";

@Component({
  selector: 'app-token-item',
  templateUrl: './token-item.component.html',
  styleUrls: ['./token-item.component.css']
})
export class TokenItemComponent  implements OnInit {
  @Input() token:TokenModel | null=null;
  @Output() evenEmitter:EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() {
  }

  ngOnInit():void {
  }

  onGetAll(p: any) {
    this.evenEmitter.emit({type:TokenActionTypes.GET_ALL_TOKEN,payload:this.token})
  }

  onDelete(p: any) {
    this.evenEmitter.emit({type:TokenActionTypes.DELETE_TOKEN,payload:this.token})
  }
  onGetImage(){
    return this.token?.image_url??''
  }

}
