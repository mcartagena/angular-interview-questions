import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoInterface } from '../todo-interface';
import { Observable } from 'rxjs';
import { TodosService } from '../todos.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo-component',
  imports: [AsyncPipe],
  templateUrl: './todo-component.html',
  styleUrl: './todo-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input('todo') todoProps!: TodoInterface;
  filter$!: Observable<string>;
  someLocalProp = 'some local prop';

  constructor(private todosService: TodosService) {
    this.filter$ = this.todosService.filter$;
  }


  checkRender() {
    console.log('render');
    return true;
  }

  changeLocalProp() {
    this.someLocalProp = 'some local prop - updated';
  }

  changeFilter() {
    this.todosService.filter$.next('completed');
  }
}
