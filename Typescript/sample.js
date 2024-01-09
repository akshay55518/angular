// console.log('helo');

// var age:number=20;
// console.log(age)

// var name:string='akshay'
// console.log(name);

// var b:boolean=true;
// console.log(b);

// var c:any='lamborgini';
// console.log(c);

// let h=10;
// let j=20;
// if(h<j){
//     let k="good";
//     console.log(k)
// }
// console.log(h)
// console.log(j)
// console.log(k)
// this not gonna work becouse of let is not a global variable but var is

// var h=10;
// var j=20;
// if(h<j){
//     var k="good";
//     console.log(k)
// }
// console.log(h)
// console.log(j)
// console.log(k)

// function hello(a:number,b:number){
//     return a+b;
// }
// console.log(hello(5,6));

// function hello(a:number,b:number){
//     return a+b;
// }
// var x=hello(9,8)
// console.log(x)

// Array
// var array1:number[]=[1,2,4,5,6]
// console.log(array1);
// var array2:Array<string>=["apple","orange","mango"]
// console.log(array2[1])
// console.log(array2)
// var arr = [1, 2, '3', {name:'zs'},'str'];
// for(var i of arr){
//     console.log(i);
// }
// var array3:number[]=[1,2,3,4,5,6]
// console.log(array3.length)
// for (var i in array3){
//     console.log(i)
//     // console.log(array3[i])
// }
var person = { name: "ammu", age: 24, place: "kannur" };
console.log(person.name + "\n" + person.age + "\n" + person.place);
console.log(person.name);
for (var i in person) {
    // console.log(person)
    console.log(person[i]);
}
