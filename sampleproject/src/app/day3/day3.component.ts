import { Component } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component {
  // msg:string='Akshay'
  // uname:string='shadan'
  // display(s:any){
  //   alert(s);
  // }
  // empname=''
  // display1(){
  //   alert(this.empname)
  // }
  // result:number=0;
  // sum(val1:any,val2:any){
  //   this.result=parseInt(val1)+parseInt(val2);
  //   // alert(this.result)
  // }
  // data:boolean=true;
  // day:string='sunny';
  stud:string[]=['akshay','shadan']
  users=[
    {id:1,username:'akshay'},
    {id:2,username:'shadan'},
    {id:3,username:'mahroof'}
  ]

}
