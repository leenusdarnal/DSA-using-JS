let str = 'apple';

let strarray = str.split('');

let newArr = [...new Set(strarray)];

console.log(newArr);
