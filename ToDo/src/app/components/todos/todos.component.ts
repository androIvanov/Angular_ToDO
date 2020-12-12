import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../models/todo.model'; 
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: TodoModel[];
  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.service.getTodos().subscribe(data => {
      this.todos = data;
    });
  }
  deleteHandler(todo: TodoModel){
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.service.delete(todo).subscribe();
  }
}
