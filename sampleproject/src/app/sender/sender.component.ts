import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  passdata(data:any){
    console.log(data)
    this.m.setdata(data)
  }
constructor(public m:MediatorService){}
}
