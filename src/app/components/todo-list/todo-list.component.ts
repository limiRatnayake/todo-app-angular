import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
 todos: Todo[] = [];
  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos)=>(
      this.todos = todos
  
      
    ))

  }
  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe((data) =>(
      this.todos.push(todo)
      
    ))
  }

  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo).subscribe(()=>(
      this.todos = this.todos.filter((t) => t.id !== todo.id)
    ));
  }

  updatedTodo(todo:Todo){
    this.todoService.updatedTodo(todo).subscribe((data)=>(
      console.log(data)
    ));
  }
} 
