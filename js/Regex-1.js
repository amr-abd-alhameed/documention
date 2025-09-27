const word = "Hello everybody my name is amr and i love Amr";
const regex = /amr/;

 console.log(word.match(regex));
// match method is used to apply regex on a specific string  and i returns
// [
//   'amr',
//   index: 27,
//   input: 'Hello everybody my name is amr',
//   groups: undefined
// ]
// It returns only the first match if there is no /g flag
// If there are no matches It returns null


// Modifiers => Flags

//   i => case-insensitive
//   g => global
//   m => Multilines

// Let's start with the first one which is i flage /i
// It's used for case insensative , it means capital letters like small letters

const regexi = /amr/i;

// console.log(word.match(regexi));
// [
//   'amr',
//   index: 27,
//   input: 'Hello everybody my name is amr and i love Amr',
//   groups: undefined
// ]

const regexg = /amr/g;

// console.log(word.match(regexg));
// [
//   'amr',
//   index: 27,
//   input: 'Hello everybody my name is amr and i love Amr',
//   groups: undefined
// ]

const regexgi = /amr/gi;

console.log(word.match(regexgi));
// [ 'amr', 'Amr' ]
