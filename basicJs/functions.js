const kori="Hello Dudette";

function myFunction(){
    console.log(kori+' \n');
}
myFunction();
// functions accepting parameters
function myFunction2(param1, param2){
    console.log(param1 + param2);
}
myFunction2("Gideon"," Kori");

//functions outta others or variables
const jamos=120;
function functionWho(){
    mbili=jamos /7;
}
functionWho();
console.log(mbili);

//addition of params
function sum(param3,param4){
    return(param3 + param4);
}
ourSum =sum(12,1);
console.log("ourSum =" + ourSum);

//queues and stuff

function nextInLine(mwangi, item){
    mwangi.push(item);
    item = mwangi.shift();
    return item;
}

const testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr))