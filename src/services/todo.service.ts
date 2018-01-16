export class ToDoService {
  private todos: { title: string }[] = [];

  addToDo(todo: {title: string}){
    this.todos.push(todo);
  }

  getToDos(){
    return this.todos.slice();
  }
}
