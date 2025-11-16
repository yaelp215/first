import { Component } from '@angular/core';
import {  Input,Output } from '@angular/core';
import {fakeTasks} from '../tasks/fake_tasks'
import{Task}from './task/task'
import { NewTask } from './new-task/new-task';


@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
 
export class Tasks {
  ishow=false;
  Ishow(){
 this.ishow=true;
  }
   tasks = fakeTasks 
    @Input() userId!: string;
     @Input() name!: string;

  get userSelectedTasks() { 
    return this.tasks.filter((task) => task.userId === this.userId) 
  } 

}
