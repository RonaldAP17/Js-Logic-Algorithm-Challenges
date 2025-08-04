let savedUser = "ronald.ap03";
let savedPassword = "iLoveFullstack";

let requestedUser = "ronald.ap03";
let requestedPassword = "iLoveFrontend";

//We create variables to compare it on a simple account-checker, and the system will show 3 different answers based on our values.

if(savedUser === requestedUser && savedPassword === requestedPassword){
    console.log("Welcome, " + savedUser + "!");
}
else if(savedUser === requestedUser || savedPassword === requestedPassword){
    console.log("Incorrect user or password, check it again.")
}
else{
    console.log("Who r u?");
}