import{Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cotact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './cotact-form.html',
  styleUrl: './cotact-form.css'
})
export class CotactForm {
 contactForm=new FormGroup({
  name:new FormControl('',Validators.required),
  email:new FormControl('',[Validators.required,Validators.email]),
  subject: new FormControl('',[Validators.required]),
  message:new FormControl('',Validators.required)
 })
 submit() {
  if (this.contactForm.invalid) return;
  console.log(this.contactForm.value); // שולח או מדפיס את הערכים
  this.contactForm.reset(); // מנקה את הטופס אחרי שליחה
}
}
