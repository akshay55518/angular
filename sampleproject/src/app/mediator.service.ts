import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {
  obj={name:"",age:"",email:""}
  setdata(data:any){
    console.log(data)
    this.obj=data
    console.log(this.obj)
  }
  putdata(){
    return this.obj;
  }
  constructor() { }
}
