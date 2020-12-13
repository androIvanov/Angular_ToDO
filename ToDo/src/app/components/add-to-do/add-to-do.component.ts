import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoModel } from 'src/app/models/todo.model';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent implements OnInit {
  title: string;
  @Output() addTodo: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  submitHandler(){
    const todo = {
      title: this.title,
      completed: false
    }
    this.addTodo.emit(todo);
  }
}
