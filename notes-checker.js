let qualification = 65; //Yoy can set any qualification to prove any of the circumstances

if(qualification >= 90){ //First logical situation, you have an A if you get a 90+ qualification.
    console.log("You're a genius, there's no more for you. You have an A");
}
else if(qualification >= 80){//You have a B if you get a 80-90 qualification.
    console.log("You're amazing, pretty good job. You have a B");
}
else if(qualification >= 70){//You have a C if you get a 70-80 qualification.
    console.log("I mean, yeah, not bad. You have a C");
}
else if(qualification >= 60){//You have a C if you get a 60-70 qualification.
    console.log("Ok, it could be worse. You have a D");
}
else{//You have a C if you get a 0-60 qualification.
    console.log("Dude, come on, I'm worried. You have an F");
}