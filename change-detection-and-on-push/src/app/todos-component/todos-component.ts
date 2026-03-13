import { Component } from '@angular/core';
import { TodoInterface } from '../todo-interface';
import { TodoComponent } from "../todo-component/todo-component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todos-component',
  imports: [TodoComponent, NgFor],
  templateUrl: './todos-component.html',
  styleUrl: './todos-component.css',
})
export class TodosComponent {
  todos: TodoInterface[] = [
    { id: 1, text: 'Learn Angular', isCompleted: true },
    { id: 2, text: 'Build a Todo App', isCompleted: true },
    { id: 3, text: 'Master Change Detection', isCompleted: false },
  ];

  changeText() {
    console.log('changeText');
  }

  changeArray() {
    this.todos[0] = { ...this.todos[0], text: 'Learn Angular - Updated' };
  }
}
