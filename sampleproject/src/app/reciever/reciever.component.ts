import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent {
stud={name:"",age:"",email:""}
emp={name:"",age:"",email:""}
ngOnInit():void{
  this.stud=this.m.obj;
  this.emp=this.m.putdata();
}
  constructor(public m:MediatorService){}

}
