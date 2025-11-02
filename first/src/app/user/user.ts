import { Component, EventEmitter } from '@angular/core';
import {USERS} from '../fake_users'
import {  Input,Output } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
 styleUrls: ['./user.css']
})
export class User {
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() id!: string;
 @Output() userSelected = new EventEmitter<string>(); 
onSelect() {
  this.userSelected.emit(this.id);
}
  
 get imagePath() {
    return 'assets/users/' + this.avatar;
  }
}
