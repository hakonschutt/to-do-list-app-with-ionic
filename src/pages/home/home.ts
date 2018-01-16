import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTodoPage } from '../new-todo/new-todo';
import { ToDoService } from '../../services/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: {title: string}[] = [];

  constructor(public navCtrl: NavController, private todoService: ToDoService) {

  }

  ionViewWillEnter(){
    this.todos = this.todoService.getTodos();
  }

  onLoadNewToDoPage(){
    this.navCtrl.push(NewTodoPage);
  }
}
