// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// the reason is that an equality check == and comparision > < >= <= works differently
//comparision converts null to number (0)

console.log(undefined == 0); //false
console.log(undefined < 0); //false
console.log(undefined > 0); //false

// ==== strict check
console.log("2" == 2);
console.log("2" === 2);
