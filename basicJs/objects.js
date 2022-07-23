//objects are like arrays but instead of referencing by indexes objects use attributes.
const kori ={
    legs: 2,
    friends:['absolutely','none'],
    "worst food":'little food',
    cars: 1000,
    "bestCar": "Benzoo"
}
console.log(kori.friends);


//accessing items from property list.
//1.Dot notation.
    const dot=kori.cars;
//2.Bracket Notation
  //a.Spaced words{also works for now spaced}
    const bracket=kori.friends;
  //b.acessing a value that is a value from a value
    const person = "bestCar";
    const myPeople=kori[person];
        console.log(myPeople);

//
console.log(`\n!<<<<@>>>>!\n`)
//
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

//
console.log(`\n!<<<<@>>>>!\n`)
//

const someObj = {
  propName: "John",
  age: 23
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

//changing value of an ojbjects attribute by either dot/bracket.
//dot
someObj.propName="John Michael";
//bracket.
someObj["age"]= "500";

//
console.log(`\n!<<<<@>>>>!\n`)
//

//adding a property to an object;
someObj.origin = "Uganda";

// deleteting a property.
delete someObj.age;

//dislaying someonject
console.log(someObj);


//
console.log(`\n!<<<<@>>>>!\n`)
//

//usind ojects for lookups
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank",
  }
  result = lookup[val];

  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));

//
console.log(`\n!<<<<@>>>>!\n`)
//
//testing objects for properties

const bosco={
  age:12,
  name:"bosco",
  home:"meru"
}

console.log(bosco.hasOwnProperty("age"));

//same old shiet
function checkObj(obj, checkProp) {
  // Only change code below this line

  if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }else {
      return "Not Found";
    }
    // Only change code above this line
}
const dawgMocha = {
    height: 120,
    width:12

  }

console.log(checkObj(dawgMocha,"height"));

//
console.log(`\n!<<<<@>>>>!\n`)
//

//object with more than 1 element.
const myMusic=[{
    "releaseYear": 2000,
    "build": "human",
    "title": "Album",
    "owner":"Jakufu"
  },
  {
    "releaseYear": 1900,
    "build": "humanese",
    "title": "Albumused",
    "owner":"Jak"
  }
  ]

  //
console.log(`\n!<<<<@>>>>!\n`)
//

//accessing nested objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
      },
    "outside": {
      "trunk": "jack"
    }
  }
};

//assignes gloveBoxContents to "maps"
const gloveBoxContents = myStorage.car.inside["glove box"];

  //
  console.log(`\n!<<<<@>>>>!\n`)
  //

// accessing nested arrays
const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];

  //
  console.log(`\n!<<<<@>>>>!\n`)
  //




