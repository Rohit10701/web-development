// function User(name) {
//     this.name = "Hi";
//     this.isAdmin = false;
//   }
  
// let user = new User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false



// function User() {
//     console.log(new.target);
//   }
  
//   // without "new":
//   User(); // undefined
  
//   // with "new":
//   new User(); // function User { ... }


function BigUser() {

    this.name = "John";
  
    return { pig: "Godzilla" };  // <-- returns this object
  }
  
  console.log( new BigUser() );  // Godzilla, got that object