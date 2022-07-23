//constructor function for person objects

function person(first,last,age,weight) {
    this.firstName = first;
    this.lastName =last;
    this.age = age;
    this.weight = weight;
}

//creating the object

const kori = new person("Gideon","Njoroge",20,60);
console.log(`He  ${kori.firstName}  is   ${kori.age}  years old.`);