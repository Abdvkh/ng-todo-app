import {Component, OnInit} from '@angular/core';

import {TodosService} from "../todos.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loading$;
  todos$;
  constructor(
    private todosService: TodosService
  ) {
    this.todos$ = todosService.entities$;
    this.loading$ = todosService.loading$;
  }

  ngOnInit() {
    this.todosService.getAll();
  }
}
