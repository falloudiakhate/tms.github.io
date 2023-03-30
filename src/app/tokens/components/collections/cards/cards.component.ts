import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TokenListComponent} from "../token-list/token-list.component";
import {CollectionModel} from "../../../../models/collection.model";

@Component({
  selector: 'collection-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {


  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(TokenListComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  @Input() collection: CollectionModel | undefined;
}
