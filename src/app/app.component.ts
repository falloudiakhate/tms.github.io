import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface TokenElement {
  id: number,
  name: string,
  image: string,
  valeur: string,
  date: Date,
  collections: number[]
}

const tokens: TokenElement[] = [
  {id: 1, name: 'Gestion des comptes',    image: '', valeur: 'aghdanhiavhf', date: new Date(), collections: []},
  {id: 2, name: 'Transactions privées',   image: '', valeur: 'aghdanhiavhf', date: new Date(), collections: []},
  {id: 3, name: 'Partage avec amis',      image: '', valeur: 'aghdanhiavhf', date: new Date(), collections: []},
  {id: 4, name: 'Token public',           image: '', valeur: 'aghdanhiavhf', date: new Date(), collections: []},
  {id: 5, name: 'Mise à jour facile',     image: '', valeur: 'aghdanhiavhf', date: new Date(), collections: []},
  {id: 6, name: 'Bilan des données',      image: '', valeur: 'aghdanhiavhf', date: new Date(), collections: []},
  {id: 7, name: 'Bancaire et code',       image: '', valeur: 'aghdanhiavhf', date: new Date(), collections: []},
  {id: 8, name: 'Hello world',            image: '', valeur: 'aghdanhiavhf', date: new Date(), collections: []},
  {id: 9, name: 'No money, no party',     image: '', valeur: 'aghdanhiavhf', date: new Date(), collections: []}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'token-management-system';


  displayedColumns: string[] = ['select', 'name', 'date', 'collections'];
  dataSource = new MatTableDataSource<TokenElement>(tokens);
  selection = new SelectionModel<TokenElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: TokenElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
