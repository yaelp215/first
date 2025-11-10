import { Component, EventEmitter } from '@angular/core';
import {USERS} from '../fake_users'
import {  Input,Output } from '@angular/core';
import { input } from '../../../node_modules/@angular/core/index';
import { UserObj } from './user.model'


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
 styleUrls: ['./user.css']
})


export class User {
  @Input({required:true}) isSelected!:boolean;
  @Input({required:true}) userObj!: UserObj;
 @Output() userSelected = new EventEmitter<string>(); 
onSelect() {
  this.userSelected.emit(this.userObj.id);
}
 get imagePath() {
    return 'assets/users/' + this.userObj.avatar;
  }
}
