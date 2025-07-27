let j;
console.log('j:', j); // This will print 'undefined' because 'j' is hoisted but not initialized

//const k; // Uncommenting this line will throw an error because 'const' variables must be initialized

function looptest(){
  for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log('Con var:', i); // This console.log will print a 5 times "5" count because 'var' is function scoped and the timeout will execute after the loop has completed, giving 'i' the final value of 5
    }, 10);
  }

  for (let j = 0; j < 5; j++) {
    setTimeout(function() {
      console.log('Con let:', j); // This console.log will print a 0 to 5 count because 'let' creates a block scope
    }, 10);
  }
}

// console.log('Global:', a, b, c); // Uncommenting this line will throw an error because 'a', 'b', and 'c' are not defined in the global scope in this line

let a = 10;
const b = 20;
var c = 30;

console.log('Global:', a, b, c);

if (true) {
  let a = 40;
  const b = 50;
  var c = 60;
  
  // a = 45; // Uncommenting this line will change the value of 'a' in this block scope
  // b = 55; // Uncommenting this line will throw an error because 'b' is a constant
  
  console.log('Bloque:', a, b, c);
}

console.log('Global después del bloque:', a, b, c); // Based on the scope, this will print different values (a= 10, b=20, c=60)

const MY_OBJECT = {
  name: 'Objeto Inmutable', 
  value: 100 }

// MY_OBJECT.value = 200; // Value will change to 200 if I uncomment this line

console.log('Objeto:', MY_OBJECT);

looptest();