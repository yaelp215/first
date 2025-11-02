import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

   users = USERS;
  protected readonly title = signal('first');

  onUserSelected(id: string){
      console.log("hiiiii")
  }
  
  
}

