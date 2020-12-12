import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { TodoModel } from './models/todo.model'; 
import { TodosComponent } from './components/todos/todos.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  todosURL:string = "https://jsonplaceholder.typicode.com/todos";
  todosLimiter: string = "?_limit=10";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoModel[]>{
    return this.http.get<TodoModel[]>(this.todosURL + this.todosLimiter);
  }

}
