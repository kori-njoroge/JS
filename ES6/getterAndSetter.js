//getter calls the setter and returns the assigned value.

class Person{
    constructor (nickName){
        this.setName(nickName);
        //this.setCurrentAge(age);
    }
    getname(){
        return this.nickName;
        //return this.age;
    }
    setName(newName){
        newName = newName.trim();
        if(newName === ''){
            throw 'The name cannot be empty';
        }
        this.nickName = newName
    }
}

let person = new Person ('Njoroge Kori');
console.log(Person);

Person.setName('Mark Maasai');
console.log(Person.getname());