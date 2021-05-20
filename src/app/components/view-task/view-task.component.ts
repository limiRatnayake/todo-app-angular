import { Component, OnInit, Input } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import {TodoService} from '../../services/todo.service'
import {Todo} from '../../Todo';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

 title: string = "";
 description: string = '';
 createdAt: string = '';


  faArrowLeft=faArrowLeft; 
  name: string = '';
  constructor(private route: ActivatedRoute,private todoService : TodoService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const todoID = Number(routeParams.get('id'));
    this.todoService.getTodoByID(todoID).subscribe((response) => {
        this.title = response.title;
        this.description = response.description;
        this.createdAt = response.createdAt;
     
    } );
    
  }

 
  
}
