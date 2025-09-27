// const domains = "Com Net Xys Io Org Gov Info ";
// const desieredDomain = /(io|net|info)/i;

// console.log(domains.match(desieredDomain));

///////////

// const domains = "Com Net Xys Io Org Gov Info Io";
// const desieredDomain = /(io|net|info)/ig;

// console.log(domains.match(desieredDomain));

//////////

// const nums = "123456789010";
// const reNums = /[1-9]/g
// ;
// console.log(nums.match(reNums));

///////////
// The not operator in Regex is ^ 

// const nums = "123456789010";
// // Here in this example it will return all numbers except in range [0 - 2]

// const noteRNums = /[^0-2]/g;
// console.log(nums.match(noteRNums));


//////////////////////

const nums = "1!2@3#4$$5%6789010";
const reNums = /[^1-9]/g;
console.log(nums.match(reNums));