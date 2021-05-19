import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs'
import{Todo} from '../Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiURL = "https://60a21a08745cd70017576014.mockapi.io/api/v1/todo"
  constructor(private http:HttpClient) { }

  getTodos(): Observable <Todo[]>{

    return this.http.get<Todo[]>(this.apiURL)
  }
  getTodoByID(id: number):Observable <Todo[]>{
    const url= `${this.apiURL}/${id}`;
    return this.http.get<Todo[]>(url)
  }
  addTodo(todo: Todo):Observable <Todo[]>{
    return this.http.post<Todo[]>(this.apiURL, todo, httpOptions)
  }

  updatedTodo(todo:Todo):Observable <Todo[]>{ 
    const url= `${this.apiURL}/${todo.id}`;
    return this.http.put<Todo[]>(url, todo, httpOptions)
  }

  deleteTodo(todo:Todo):Observable <Todo[]>{
    const url= `${this.apiURL}/${todo.id}`;
    return this.http.delete<Todo[]>(url)
  }

}
