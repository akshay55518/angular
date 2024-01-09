import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.css']
})
export class Day6Component {
form2:FormGroup;
show(){
  console.log(this.form2.value)
}
constructor(public formbuild:FormBuilder){
  this.form2=formbuild.group({
    uname:[''],
    uage:[],
  })
}
}
