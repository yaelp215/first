import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { CommonModule } from '@angular/common'
import { Tasks } from './tasks/tasks';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';
import {CotactForm} from './cotact-form/cotact-form'



@Component({
  selector: 'app-root',
  imports: [Header,User,CommonModule,Tasks,CotactForm],
  templateUrl: './app.html',
styleUrls: ['./app.css']
})
export class App {
   showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

   users = USERS;

  protected readonly title = signal('first');
  selectedUser?: any;

  onUserSelected(id: string){
    
    const choiceUser = this.users.find(prev => prev.id === id);
    this.selectedUser = choiceUser;
      console.log(choiceUser);
    
  }
  
  
}

