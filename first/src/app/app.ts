import { Component, signal ,Output,EventEmitter} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { CommonModule } from '@angular/common'
import { Tasks } from './tasks/tasks';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';
import {CotactForm} from './cotact-form/cotact-form'
import {NewUser} from './user/new-user/new-user'




@Component({
  selector: 'app-root',
  imports: [Header,User,CommonModule,Tasks,CotactForm,NewUser],
  templateUrl: './app.html',
styleUrls: ['./app.css']
})
export class App {
  
   showForm = false;
   showUser=false;
 
  toggleForm() {
    this.showForm = !this.showForm;
  }
  openNewuser(){
    this.showUser=!this.showUser
    console.log("sss")
  }

   users = USERS;
   addmewuser(formValue:any){
    console.log("addmewuser called", formValue);
    const id = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    const fullName = `${formValue.name.firstName} ${formValue.name.lastName}`.trim();
    const user: any = {
      id,
      name: fullName,
      avatar: ''
      };
       console.log(user);
      this.users = [...this.users, user];
      this.showUser=false;
      
   }
  

  protected readonly title = signal('first');
  selectedUser?: any;
  onUserSelected(id: string){
    const choiceUser = this.users.find(prev => prev.id === id);
    this.selectedUser = choiceUser;
      console.log(choiceUser);
    
  }
  
  
}

