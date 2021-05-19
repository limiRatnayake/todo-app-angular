import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { faCoffee ,faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Todo} from '../../Todo'

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.css']
})
export class TodoListItemsComponent implements OnInit {
  @Input() todo! : Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter()
  @Output() onUpdatedTodo: EventEmitter<Todo> = new EventEmitter()
  faCoffee= faCoffee;
  faEdit= faEdit;
  faTrashAlt=faTrashAlt;

  constructor() { }

  ngOnInit(): void {

  }
  //pass this delete method to parent component make sure that all methods are in one place
  onDelete(todo: Todo){
   this.onDeleteTodo.emit(todo); 
  }

  updatedTodo(todo:Todo){
    this.onUpdatedTodo.emit(todo);
  }
}
