const email =
  "dkdDD@SD  amr@da.sa amr@arm.com EWR@E.d ##3 an@ad.net ^E&*^%^5434ovvkv j4949v";
const dot = /./g; // matches any char except new lines or other line terminator
// console.log(email.match(dot));
//const word = /\w/g; //matches all chars and numbers and underScore
// /w matches all words like chars lower and upper case and numbers and underScore
// /W matches all non words like special chars
// /d matches all digits for range 0-9
// /D matches all non digits 
// /s matches all spaces
// /S matches all non spaces
const spaces = /\S/g;
const validEmail = /\w@\w.net/g;
console.log(email.match(spaces));
