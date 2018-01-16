import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToDoService } from '../../services/todo.service';

@IonicPage()
@Component({
  selector: 'page-new-todo',
  templateUrl: 'new-todo.html',
})
export class NewTodoPage {

  constructor(private todoService: ToDoService, private navCtrl: NavController) {
  }

  onAddToDo( value: { title: string } ){
    this.todoService.addTodo(value);
  }
}
