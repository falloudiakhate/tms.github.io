import {Component, OnInit} from '@angular/core';
import {CollectionService} from "../../../services/collection.service";
import {CollectionModel} from "../../../models/collection.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit{

  collections : Observable<CollectionModel[]> | undefined;

  constructor(private collectionService: CollectionService) {}

  ngOnInit() {
    this.collections = this.collectionService.getAllCollection();
  }


}
