//example and the equivalent
/*const person = {
    name: "Taylor",
    sayHello: function() {
    return `Hello! My name is ${this.name}.`;
    }
    };
*/
//ES6 removes the function(); keyword and declares directly.

    const person = {
        name: "Taylor",
        sayHello() {
        return `Hello! My name is ${this.name}.`;
        }
    };


    //challenge example 2
    // Only change code below this line
    const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
    };
    // Only change code above this line
    bicycle.setGear(3);
    console.log(bicycle.gear);

