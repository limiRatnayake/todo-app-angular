import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  closeResult: string ='';
 
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
 
}
