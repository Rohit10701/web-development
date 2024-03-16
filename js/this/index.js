"use strict";
// global scope
let userGlobal = {
  name: "Rohit Global",
};
console.log("As global : ",this); //global object -> window, global




// inside the function

function x() {
  // the value depends on strict and non-strict mode

  console.log("Inside a function : ",this);
  // non strict mode -> window, global
  // strict -> undefined
}





// this inside non-strict mode -> (this substitution)

/*
    If value of this keyword is undefined or null this keyword will be replace by global object in non-strcit mode
*/




// The vlaue of this keyword also depends on how it's called
x();

// for browser
// window.x()





// this inside a object's method

let newUser = {
    name: "Rohit function x",
    x : function(){
      console.log("As a method : ", this)
    }
  };
  
  newUser.x()
  


  
// this using call apply bind

// bind
function y() {
  console.log("Using Bind : ", this.name);
}
let res = y.bind(newUser);
res();


// call
const student = {
    name : "Rohit",
    printName : function (){
        console.log("this is not fixed : ",this.name)
    }
}

student.printName()

const student2 = {
    name : "Rahul"
}

student.printName.call(student2)


// Arrow functions

/* 
    Arrow function doesnt have their own this binding it retains the this value of the enclosing lexical context
*/

const obj = {
    a : 10,
    x : () => {
        console.log("this in Arrow function", this)
        const innerArrowFunction = () => {
            console.log("this inside the Arrow Function" , this)
        }
        innerArrowFunction()
    }
}

const obj2 = {
    a: 10,
    x: function() { 
        // enclosing lexical context -> for innerArrow function this would be similar to this for x

        console.log("this in regular function x : ", this);
        const innerArrowFunction = () => {
            console.log("this inside the Arrow Function : ", this);
        };

        
        const innerNormalFunction =  function() {
            console.log("this inside the normal function : ", this )
        }
        innerArrowFunction();
        innerNormalFunction()
    }
};

obj.x();
obj2.x()



// this keyword in the DOM

/*
    Reference to HTML Element
*/