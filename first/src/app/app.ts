import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { CommonModule } from '@angular/common'
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,User,CommonModule,Tasks],
  templateUrl: './app.html',
styleUrls: ['./app.css']
})
export class App {

   users = USERS;
  protected readonly title = signal('first');
  selectedUser?: any;

  onUserSelected(id: string){
    
    const choiceUser = this.users.find(prev => prev.id === id);
    this.selectedUser = choiceUser;
      console.log(choiceUser);
    
  }
  
  
}

