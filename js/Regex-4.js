const email =
  "dkdDD@SD  amr@da.sa amr@arm.com EWR@E.d ##3 an@ad.net ^E&*^%^5434ovvkv j4949v";
const dot = /./g; // matches any char except new lines or other line terminator
// console.log(email.match(dot));
//const word = /\w/g; //matches all chars and numbers and underScore
const spaces = / /g;
const validEmail = /\w@\w.net/g;
console.log(email.match(validEmail));
