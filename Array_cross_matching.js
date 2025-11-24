const number = [1, 4, 5, 6, 8, 9, 15, 19, 23, 25];

const EvenNumber = number.some(even => even % 2 == 0);
// console.log(EvenNumber);


const currentUser = ["editor", "user","admin"];

const acessUser = ["admin", "superAdmin"];

const chackUser = currentUser.some(role => acessUser.includes(role));
// console.log(chackUser);


const arr = Array.from({length: 5}).fill(0);
console.log(arr);