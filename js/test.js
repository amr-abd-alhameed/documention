let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
//// ['Os10O', 'OsO', 'Os100O']
// const pattern = /(\bos|o\b)/ig;
const regex1 = /\bOs\w+O\b/g;        // يلتقط Os10O و Os100O و Os1000O فقط
const pattern = /\bOs.*?O\b/g;

console.log(specialNames.match(pattern));