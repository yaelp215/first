import { Component  } from '@angular/core';
import { FormsModule ,NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  title:string='';
  summary:string='';
  dueDate:string='';
  onsubmit(from:NgForm){
    console.log(from);
    console.log(from.title);
  }


}
