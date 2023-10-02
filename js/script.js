// *************** 1-lesson**********
// let number = 10;
// const borderColor = "red";

// const person = {
//     neme: "xudoyshukur",
// };

// person.name = "Abdumuminov";
// console.log(person)


//**************2-lesson************

// "use strict"
// number = 10
// console.log(number);



//**********3-lesson*************

// "use strict";


// //number
// let ummber = 5.6; // Data Type = Number
// console.log(-8 / 0); // Infinity
// console.log("xudoyshukur" * 8); // NaN

// //string
// const clientName = 'xudoyshukur';

// //boolean
// const isMarried = false;
// const isCircleEarth = true;

// //null
// // console.log(clientAge);

// //undefined
// let und;
// console.log(und);

// //object
// const thief = {
//     //key: value
//     age: 30, //number
//     jacket: "black", //string
//     isLong: false, //boolean
// };
// console.log(thief.jacket);
// console.log(thief.age);
// console.log(thief);

// // array
// //                0       1        2      3   4   5      
// const colors = ["red", "black", "gre  en", 10, [], {}];


// console.log(colors[0]);
// console.log(colors[4]);



//*********4-lesson*********|#8

// alert("Hello JavaScript!!")

// const place = confirm("Are you here?");
// console.log(place);

// const currentPlace = prompt("Where are you?", "Toshkent")
//     // console.log(typeof currentPlace);

// const age = +prompt("How are you?", "18");
// console.log(age + 10);
// console.log(typeof age);

// const favouriteColor = [];
// favouriteColor[0] = prompt("wahat's your favourite color #1", "");
// favouriteColor[1] = prompt("wahat's your favourite color #2", "");
// favouriteColor[2] = prompt("wahat's your favourite color #3", "");
// favouriteColor[3] = prompt("wahat's your favourite color #4", "");


// console.log(typeof favouriteColor)




//*********5-lesson*********|#9 Interpolatsiya

// const channel = prompt("what's your favourite youtuber");
// console.log("https://youtube.com/" + channel + "/videos")

// const channel = prompt("what's your favourite youtuber?");
// console.log(`https://youtube.com/${channel}`);


// const user = "Xudoyshukur";
// const job = "JavaScript developer";
// console.log(`User name is ${user}, he is ${job}`);




//*********6-lesson*********|#10  Operatorlar

// console.log(6 + +"9");

//incr,  decr


// let incr = 10;
// let decr = 10;

// incr++;
// decr--;

// console.log(incr++);
// console.log(decr--);

// console.log(incr++);
// console.log(decr--);

// console.log(++incr); x
// console.log(--decr); x


// console.log(incr);
// console.log(decr);

// console.log(10 % 3); //qoldiq prasent

// console.log(5 * 5 == 25); //true
// console.log(5 * 5 == "25"); // bunda ham true chiqaradi chunki qiymatka qarab olayapdi.\
// console.log(5 * 5 === "25"); //tenglasht

//&& = va || = yoki


const isAge = true;
const isClose = true; //butga false quysak false chiqadi
const isChecked = false; //butga false quysak false chiqadi

console.log(isAge && isClose);
console.log(isAge || isClose || isChecked);
console.log(isAge && isClose && isChecked);
console.log(isAge && isClose && !isChecked);


console.log(2 + 2 * 2 !== 8);
console.log(2 + 2 * 2 !== "6");
console.log(2 + 2 * 2 !== 6);