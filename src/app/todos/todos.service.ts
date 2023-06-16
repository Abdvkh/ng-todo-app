import { Injectable } from '@angular/core';
import {EntityActionOptions, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from "@ngrx/data";
import {map, Observable} from "rxjs";

import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodosService extends EntityCollectionServiceBase<Todo>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Todo', serviceElementsFactory);
  }

  [name: string]: any;

  override getAll(options?: EntityActionOptions): Observable<Todo[]> {
    return super.getAll(options).pipe(map((response: any) => response.results));
  }
}
