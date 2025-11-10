import { Component,Input  } from '@angular/core';
import { task } from './task.model'
 
 

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})

export class Task {
  // @Input() title!: string;
  // @Input() summary!: string;
  // @Input() time!: string;
@Input({required: true}) task!: task
  completed: boolean = false; 
  toggleCompleted() {
    this.completed = !this.completed;
  }
}
