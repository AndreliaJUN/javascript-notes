// var a=1;
// a();
// function a() {
// console.log("haha");
// }
// var a;
// function a(){
//   console.log("haha");
// }
// a=1;
// a()
// console.log(foo);
// var foo = 1  //变量提升
// console.log(foo)
// foo()
// function foo(){ //函数提升
//    console.log('函数')
// }
// var a = 1;
// let a = 2;
// console.log(a);
                   
// var myObject = {
//   foo: "bar",
//   func: function() {
//       var self = this;
//       console.log(this.foo);  
//       console.log(self.foo);  
//       (function() {
//           console.log(this.foo);  
//           console.log(self.foo);  
//       }());
//   }
// };
// myObject.func();
// 1.第一个this.foo输出bar，因为当前this指向对象myObject。
// 2.第二个self.foo输出bar，因为self是this的副本，同指向myObject对象。
// 3.第三个this.foo输出undefined，因为这个IIFE(立即执行函数表达式)中的this指向window。
// 4.第四个self.foo输出bar，因为这个匿名函数所处的上下文中没有self，所以通过作用域链向上查找，从包含它的父函数中找到了指向myObject对象的self。
// function a(){
//   for(i=0;i<=2;i++){

//   }
//   console.log(i)
// }
// a()
// function People(){
//   console.log(this);
// }
// var per=new People();
var sum=function(num1,num2){
  console.log(num1+num2);
};

sum(1,2);