
//Exercises: Understanding Arrow Functions and `this` in JavaScript

// 1. Create an object called `myTeam` with a name and members.
// 2. Add a method to `myTeam` that prints the team name using a traditional function.
// 3. Add another method that prints the team name using an arrow function.

const myTeam = {
  name: 'Remote Startup',
  members: ['Ana', 'Juan', 'Pedro'],

  // With Traditional Function
  getTeamNameFunction: function() {
    console.log('Function this.name:', this.name); // This references the myTeam object, getTeamNameFunction knows about `this` because it's called as a method of myTeam
  },
  
  // With Arrow Function
  getTeamNameArrow: () => {
    console.log('Arrow this.name:', this.name); // This will not work as expected because arrow functions do not have their own `this`, they inherit it from the surrounding context, which is likely the global scope or undefined in strict mode.
    // To fix this, we can use a regular function or put this arrow function inside a method of the object.
  },
  
  // A mix of both, this method uses an arrow function to print team members with a delay
  printMembersWithDelay: function() {
    console.log('Members of:', this.name);
    this.members.forEach((member) => {
        // Arrow functions is a good choice here because it keeps the context of `this` from the parent function
        console.log(`- ${member} works on ${this.name}`); 
    });
  }
};

myTeam.getTeamNameFunction();
myTeam.getTeamNameArrow();
myTeam.printMembersWithDelay();


// 1. Create an object called `Car` with properties for brand, speed, and an interval ID.
// 2. Add a method to `Car` that accelerates the speed by 10 km/h.
// 3. Add a method to `Car` that starts a simulation of acceleration every 1.5 seconds.
// 4. Add a method to `Car` that stops the simulation when the speed reaches 50 km/h.
// 5. Ensure that the methods use `this` correctly to refer to the `Car` object.
// 6. Use `setInterval` to simulate the acceleration and `clearInterval` to stop it when the speed reaches 50 km/h.
// 7. Use arrow functions where appropriate to maintain the context of `this`.
// 8. Ensure that the simulation can be stopped and the final speed is logged.
// 9. Use `console.log` to print the current speed at each acceleration step and when the simulation stops.

const Car = {
    brand: 'Toyota',
    speed: 0,
    intervalID: null, // It's a good practice to initialize properties that will hold IDs for intervals or timeouts.

    accelerate: function() {
        this.speed += 10; // This method modifies the speed property of the Car object.
        console.log(`Current speed: ${this.speed} km/h`);
    },

    startSimulation: function() {

        // This method starts the simulation by setting an interval that calls the accelerate method every 1.5 seconds.
        this.intervalID = setInterval(() => { //Arrow function is used here to maintain the context of `this`.
            this.accelerate(); // Call the accelerate method to increase speed.

            // Create a condition to stop the simulation when speed reaches 50 km/h.
            if (this.speed >= 50) {
                this.stopSimulation();
            }
        }, 1500);
    },
    
    // A function to stop the simulation.
    // It clears the interval and logs the final speed.
    stopSimulation: function() {
        clearInterval(this.intervaloID);
        console.log('Simulation stopped. Final speed:', this.speed, 'km/h');
    }
};

Car.startSimulation();
