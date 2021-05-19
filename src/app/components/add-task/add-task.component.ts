import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Todo} from '../../Todo'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter()
  title: string = '';
  description: string = '';
  createdAt: string = '';
 
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
 onSubmit(){
   //simple validation
   if(!this.title){
     alert("Please add a task")
     return;
   }
//passing data
   const newTodo = {
      title: this.title,
      description: this.description,
      createdAt: this.createdAt
   }
   //emit to parent class
    this.onAddTodo.emit(newTodo);

  //clear the form
   this.title ='';
   this.description ='';
   this.createdAt ='';
 }
}
