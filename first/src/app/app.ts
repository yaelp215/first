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
  //  addmewuser(){
  //   const id = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
  //   const fullName = `${newuser.name.firstName} ${formValue.name.lastName}`.trim();
  //   const user: UserObj = {
  //     id,
  //     name: fullName,
  //     avatar: ''
  //     };
  //  }

  protected readonly title = signal('first');
  selectedUser?: any;

  onUserSelected(id: string){
    
    const choiceUser = this.users.find(prev => prev.id === id);
    this.selectedUser = choiceUser;
      console.log(choiceUser);
    
  }
  
  
}

