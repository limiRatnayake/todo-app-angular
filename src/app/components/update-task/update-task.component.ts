import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {  faEdit} from '@fortawesome/free-solid-svg-icons';
import{Todo} from '../../Todo'


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  faEdit=faEdit;
  @Input() todo!: Todo;
  @Output() updatedTodo: EventEmitter<Todo>= new EventEmitter();
  
  title: string = '';
  description: string = '';
  createdAt: string = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.title = this.todo.title;
  this.description = this.todo.description;
  this.createdAt = this.todo.createdAt;

  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  onUpdate(){
    const updatedTodo = {
      title: this.title,
      description: this.description,
      createdAt: this.createdAt
   }
   this.updatedTodo.emit(updatedTodo);
  }
}
