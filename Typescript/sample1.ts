class student{
    id:number;
    name:string;
    mark:number;
    show():void{
        console.log(this.id+""+this.name+""+this.mark)
    }
    getid():number{
        return this.id;
    }
    getname():string{
        return this.name;
    }
}
let obj=new student();
obj.id=100;
obj.name="ammu";
obj.mark=95;
obj.show();

var s=obj.getid();
var a=obj.getname();
console.log(a)
console.log(s)

// class student2{
//     id:number;
//     name:string;
//     mark:number;
//     constructor(id1:number,name1:string,mark1:number){
//         this.id=id1;
//         this.name=name1;
//         this.mark=mark1;
//     }
//     show():void{
//         console.log(this.id+""+this.name+""+this.mark)
//     }
// }

// let obj2=new student2(101,"abi",43);
// obj2.show()