import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToDoService } from '../../services/todo.service';

@IonicPage()
@Component({
  selector: 'page-new-todo',
  templateUrl: 'new-todo.html',
})
export class NewTodoPage {

  constructor(private todoService: ToDoService) {
  }

  onAddToDo( value: { title: string } ){
    this.todoService.addToDo(value);
  }
}
