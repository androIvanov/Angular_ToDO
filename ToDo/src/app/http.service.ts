import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { TodoModel } from './models/todo.model'; 
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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

  completeToggler(todo: TodoModel): Observable<any>{
    let url = this.todosURL + '/' + todo.id;
    return this.http.put<TodoModel>(url, todo, httpOptions);
  }

  delete(todo: TodoModel): Observable<TodoModel>{
    let url = this.todosURL + '/' + todo.id;
    return this.http.delete<TodoModel>(url , httpOptions);
  } 
}
