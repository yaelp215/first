import { Component } from '@angular/core';
import {  Input,Output } from '@angular/core';
import {fakeTasks} from '../tasks/fake_tasks'
import{Task}from './task/task'


@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
 
export class Tasks {
   tasks = fakeTasks 
    @Input() userId!: string;
     @Input() name!: string;
  get userSelectedTasks() { 
    return this.tasks.filter((task) => task.userId === this.userId) 
  } 

}
