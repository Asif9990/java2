console.log("chaliye shjuru karte hs");

// // object create

// let rectangle = {
//   length: 1,
//   breath: 2,

//   draw: function () {
//     console.log("drawing rectrangle");
//   },
// };

// function createRectrangle()
// {
//   let rectangle = {
//     length: 1,
//     breath: 2,

//     draw: function () {
//       console.log("drawing rectrangle");
//     },
//   };
//   return rectrangle
// }

// constructor Function --> pascal Notation First Letter of every word is capital --> NumberOfStudents
//constructor function --> prop/methods --> initialise/define

// function Rectangle(len, bre) {
//   this.lenght = len;
//   this.breath = bre;
//   this.draw = function () {
//     console.log("drawing");
//   };
// }

// // object creation using constructor function
// let rectangleObject = new Rectangle(4, 6);
// rectangleObject.color = "yellow";
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//   'length', 'breadth',
//   'this.lenght = len;',
//   'this.breath = bre;',
//   'this.draw = function ()
//   {console.log('drawing'); }
//   );'
// //  object creation using Rectanle1
// let rect = new Rectangle1(2,3);
// console.log(rect);

// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };
// let dest = {};
// for (let key in src) {
//   dest[key] = src[key];
// }
// console.log(dest);

// src.a++;
// console.log(dest);

// boject 2
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let src2 = { value: 25 };

// let dest = Object.assign({}, src, src2);
// console.log(dest);
// src.a++;
// console.log(dest);

// object cloning #3
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };
// let dest = { ...src };
// console.log(dest);
// src.a++;
// console.log(dest);

// your code goes here
let hour = 5;
let second = 60;
let hours = 60;
console.log(hour * second);
console.log(hour * second * hours);
