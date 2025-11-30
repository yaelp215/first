import { Component,Output,EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { AbstractControl } from '../../../../node_modules/@angular/forms/index';

@Component({
  selector: 'app-new-user',
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css'
})
export class NewUser {
  @Output() newuser = new EventEmitter<any>(); 
  categoryList=["work","personal","urgent"]
  Form=new FormGroup({
   name:new FormGroup({
     lastName:new FormControl("",[Validators.required,Validators.maxLength(18)]),
     firstName:new FormControl("",[Validators.required,Validators.maxLength(18)])
   }),
   passwords:new FormGroup({
    password:new FormControl("",[Validators.required,Validators.minLength(6)]),
    confirmPassword:new FormControl(''),
   },{validators:this.passwordMatch}),
   email:new FormControl("",[Validators.required,Validators.email]),
   categories:new FormArray(this.categoryList.map(()=>new FormControl(false))
   )
  })
  get email(){
    return this.Form.controls['email']
  }
  passwordMatch(group:AbstractControl){
    const p=group.get('password')?.value;
    const c=group.get('confirmPassword')?.value
    return p===c ? null : {mismatch:true}
  }
  submit(){
    this.newuser.emit(this.Form.value);
    this.Form.reset();
  }
  
}
