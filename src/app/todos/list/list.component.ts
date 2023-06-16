import {Component, OnInit} from '@angular/core';

import {TodosService} from "../todos.service";
import {Observable} from "rxjs";
import {Todo} from "../todo";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loading$: Observable<boolean>;
  todos$?: Observable<Todo[]>;
  todo = new FormGroup({
      title: new FormControl(''),
  });
  constructor(
    private todosService: TodosService
  ) {
    this.todos$ = todosService.entities$;
    this.loading$ = todosService.loading$;
  }

  ngOnInit() {
    this.todosService.getAll();
  }

  public addToDo() {}
}
