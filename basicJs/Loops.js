//while loop

const myArray=[];

let k = 8;

while (k >= 0) {
    myArray.push(k);
    k--;
}
console.log(myArray);

//for loop.
const myForArray=[];

for (let k = 0; k <= 5; k++) {
    myForArray.push(k);
}

console.log('\n' +myForArray);

//for loop for even numbers
// change sign and declaration to produce a descending order.
const evenNumber =[];

for(j=20; j<=39; j += 2){
    evenNumber.push(j);
}
console.log('\n' + evenNumber);

//iterate through  an array with a four loop
/*
const arr = [2, 3, 4, 5, 6];


for(let total=0; total < arr.length; total++){
    total += total;
}
console.log(total);*/

//nested for loop
const arrMy = [
[1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arrMy.length; i++) {
for (let j = 0; j < arrMy[i].length; j++) {
    console.log(arrMy[i][j]);
}
}

//do while.
//executes once before the checking the condition.

const arrMine=[];
let i = 1;

do{
    arrMine.push[i];
    i++;
}while(i<11);

//