const k=[2,3,4];
function constScope(){
    k[0]=4;
    k[1]=3;
    k[2]=[k[0],k[1]];
    return k;
}
console.log(constScope(k));

//OBJECT.FREEZE()- Makes an object read only

function freezeObj() {
const MATH_CONSTANTS = {
    PI: 3.14
};

Object.freeze(MATH_CONSTANTS)

try {
    MATH_CONSTANTS.PI = 99;// PI is read only
} catch(ex) {
    console.log(ex);
}
return MATH_CONSTANTS.PI;
}
const PI = freezeObj();