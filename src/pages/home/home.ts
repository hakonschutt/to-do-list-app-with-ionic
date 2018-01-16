import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTodoPage } from '../new-todo/new-todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLoadNewToDoPage(){
    this.navCtrl.push(NewTodoPage);
  }
}
