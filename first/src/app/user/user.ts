import { Component } from '@angular/core';
import {USERS} from '../fake_users'
import {  Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input() name!: string;
  @Input() avatar!: string;

 get imagePath() {
    return 'assets/users/' + this.avatar;
  }
}
