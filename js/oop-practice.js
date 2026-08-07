// STEP 1
//Create two classes, one called Cat and another called Dog. 
// Both classes should be created using constructor syntax. The Cat 
// class should be created using a named declaration and the Dog class 
// should be created using an anonymous declaration.

/*
// using a name declaration
// NOTE: if I put a 'const' in front of 'class Cat' below, I get errors
class Cat {
  constructor() {
    console.log('The cat has been created.')
  }
}
// Anonymous class declaration
const Dog = class {
  constructor() {
    console.log('The dog has been created.')
  }
};
*/


// STEP 2
// Create a new instance of the Cat class. Directly underneath, 
// create a new instance of the Dog class.

/*
class Cat {
  constructor() {
    //console.log('The cat has been created.')
  }
}
// Anonymous class declaration
const Dog = class {
  constructor() {
    //console.log('The dog has been created.')
  }
};

//cat1 = new Cat
dog1 = new Dog
*/

// STEP 3
//Create a new class using constructor syntax called Animal. Create a 
// method within the Animal class that when called, displays the message
// “The Animal has been created” in the console window.
/*
class Animal {
  constructor() {
    console.log('The Animal has been created')
  }
}

animal1 = new Animal
*/
// STEP 4
// Now, replicate the above code but this time so that the class accepts 
// an argument and that value is what is displayed in the console window.
// The message should be passed into the constructor at the moment that 
// the Animal class is instantiated.

/*
class Animal {
  constructor(name) {
    this._name = name
    console.log(`The Animal named ${this._name} has been created`)
  }
}

animal1 = new Animal('Buster')
*/

// STEP 5
//Start over and now create a new class using constructor syntax called 
// Animal. Define five properties within your class including properties
// type, breed, color, height, and length. These properties will be set 
// within the object so you’ll need to pass in arguments into the 
// function’s constructor, set the properties, and then pass in the actual
// values during the object’s instantiation.
/*
class Animal {
  constructor(type, breed, color, height, length) {
    this._type = type
    this._breed = breed
    this._color = color
    this._height = height
    this._length = length
    console.log(`My dog ${this._color} Buster is a ${this._type}, ${this._breed} which is ${this._height} inches height and ${this._length} inches in length.`)
  }
}

animal1 = new Animal('small-sized hound', 'beagle', 'black, tan & white', '15', '30')
*/

// STEP 6
//Use a for-in loop to loop through and display all of the properties in the Animal class. 
// You should see a total of 5 properties displayed in a list within the console window.
/*
//define class Animal
class Animal {
  constructor(type, breed, color, height, length) {
    this._type = type
    this._breed = breed
    this._color = color
    this._height = height
    this._length = length
  }
}
// instantiate the class object
animal1 = new Animal('small-sized hound', 'beagle', 'black, tan & white', '15', '30')

// use the for...in loop to display all properties
for (let key in animal1) {
  console.log(`${key}: ${animal1[key]}`)
}
*/

// STEP 7
// Now, create a public method called speak. Within the speak method you will use a conditional 
// to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” 
// If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal 
// class has been instantiated.
//class Animal definition:
/*
class Animal {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  //method called speak
  speak() {
    if (this.type === "dog") {
      return `The ${this.color} dog is barking!`
    } else if (this.type === "cat") {
      return `The ${this.color} cat is meowing!`
    } 
  }
}
//instantiate class Animal
cat1 = new Animal('cat', 'black')
//call method speak after instantiation
console.log(cat1.speak())
dog1 = new Animal('dog', 'brown')
console.log(dog1.speak())
*/

// STEP 8
// Now, convert all of your properties to private properties. Then, create a private method called 
// checkType(). In this method you will check to see what the type is. If it’s dog, return dog, 
// otherwise, return cat. Then, create a privileged method called speak that returns the value of the 
// checkType() method. The console window should now display “The <animal type> has made a noise!”
/*
function Animal(type) {
  // private method - ie hidden inside the Animal function
  // and outside code cannot call checkType directly
  function checkType() {
    if (type === "dog") {
      return "dog"
    } else {
      return "cat"
    }
  }

  // privileged method, created with this.speak
  // has public access from outside the object
  this.speak = function() {
    const animalType = checkType()
    return "The " + animalType + " has made a noise!"
  };
}

animal1 = new Animal("dog")
console.log(animal1.speak()) 
*/

// STEP 9
// Create your own String method called findWords that inherits from the native String Object. 
// This method should find all instances of a specific word within a provided paragraph of text. 
// It should then alert out to the user the number of time that word was found in the paragraph. 
// Remember, you’ll need to add your method to the String object’s prototype.
/*
String.prototype.findWords = function(word) {
     
    // replace escape characters to prevent syntax errors
    // RegEx
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // 'g' = global search;
    // 'i' = case-insensitive
    // '\b' ensures we match whole words only, not parts of longer words
    const regex = new RegExp(`\\b${escapedWord}\\b`, 'gi');
    
    // Match against the string instance (this)
    const matches = this.match(regex);
    
    // Count the matches or default to 0 if null
    const count = matches ? matches.length : 0;
    
    alert(`The word "${word}" was found ${count} time(s).`);
    return count;
};

const phrase = "The quick brown dog with a doggie tag jumps over the lazy dog. what does the lazy dog respond?";

phrase.findWords("dog"); 
*/
