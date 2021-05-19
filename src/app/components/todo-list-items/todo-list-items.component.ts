import { Component, OnInit } from '@angular/core';
import { faCoffee ,faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.css']
})
export class TodoListItemsComponent implements OnInit {
  faCoffee= faCoffee;
  faEdit= faEdit;
  faTrashAlt=faTrashAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
