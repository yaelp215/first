import { Component, EventEmitter } from '@angular/core';
import {USERS} from '../fake_users'
import {  Input,Output } from '@angular/core';
import { input } from '../../../node_modules/@angular/core/index';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
 styleUrls: ['./user.css']
})
export class User {
  @Input({required:true}) isSelected!:boolean;
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
