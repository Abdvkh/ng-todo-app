import {Component, OnInit, SecurityContext} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {DomSanitizer} from "@angular/platform-browser";

import {TodosService} from "../todos.service";
import {AuthService} from "../../auth/auth.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loading$: Observable<boolean>;
  todos$?: Observable<Todo[]>;
  newTodo = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    user: new FormControl<number | null>(null),
  });
  constructor(
    private authService: AuthService,
    private todosService: TodosService,
    private domSanitizer: DomSanitizer
  ) {
    this.todos$ = todosService.entities$;
    this.loading$ = todosService.loading$;
  }

  ngOnInit() {
    this.newTodo.get('user')?.reset(parseInt(this.authService.userID!))
    this.todosService.getAll();
  }

  public addToDo() {
    this.newTodo.get('user')?.setValue(parseInt(this.authService.userID!))
    const todo  = this.newTodo.getRawValue() as Todo;

    this.todosService.add(todo);

    this.newTodo.reset();
  }

  public checkToDo(event: MatCheckboxChange, todo: Todo) {
    this.update({...todo, completed: event.checked})
  }

  public changeTitle(mutationRecords: MutationRecord[], todo: Todo) {
    if (mutationRecords.length == 1 && mutationRecords.some((mutation) => mutation.type == 'characterData'))
      this.todosService.update({
        ...todo,
        title: this.domSanitizer.sanitize(SecurityContext.HTML, mutationRecords[0].target.textContent)
      } as Partial<Todo>);
  }

  public update(todo: Todo) {
    this.todosService.update(todo);
  }

  public delete(todoID: string) {
    this.todosService.delete(todoID);
  }
}
