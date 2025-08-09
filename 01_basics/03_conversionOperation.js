// from any to number

let score = "33";
console.log(typeof score); //string
let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number

let score1 = "33abc";
console.log(typeof score1); //string
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1); // number
console.log(valueInNumber1); // NaN

let score2 = null;
console.log(typeof score2); //object
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // 0

let score3 = undefined;
console.log(typeof score3); //undefined
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3); // NaN

let score4 = true;
console.log(typeof score4); // boolean
let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4); // 1

/*
conclusion

"33" => 33
"33abs" => NaN
true => 1
false => 0

*/

//from any to Boolean

let isLoggedIn = 1;
let booleanIsLoogedIn = Boolean(isLoggedIn);
console.log(booleanIsLoogedIn); // true

let isLoggedIn1 = "";
let booleanIsLoogedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoogedIn1); // false

let isLoggedIn2 = "Vimal";
let booleanIsLoogedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoogedIn2); // true

// to String
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string

// ***************** Operation ********************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello,";
let str2 = " Vimal";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(+true); // 1
// console.log(true+);  // errorrrrr
console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
