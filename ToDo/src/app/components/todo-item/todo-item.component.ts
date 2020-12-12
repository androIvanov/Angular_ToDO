import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel;
  @Output() deleter: EventEmitter<TodoModel> = new EventEmitter();


  constructor(private service: HttpService) { }

  ngOnInit(): void {
  }
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes
  }
  toggleHandler(todo: TodoModel){
    //Toggle in UI
    todo.completed = !todo.completed;

    //Toggle on Server
    this.service.completeToggler(todo).subscribe()
  }
  deleteHandler(todo: TodoModel){
    this.deleter.emit(todo);
  } 
}
