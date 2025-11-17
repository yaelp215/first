import { Component  } from '@angular/core';
import { FormsModule ,NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'

})
export class NewTask {
  title:string='';
  summary:string='';
  dueDate:string='';
  onsubmit(from:NgForm){
    console.log(from);
    console.log(from.value.title);
     console.log(from.value.summary);
      console.log(from.value.dueDate);
  }
}
