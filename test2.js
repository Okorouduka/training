const prompt= require("prompt-sync")();
const grade = prompt("What is your grade: ")

if(grade<=45){console.log("f")}
else if(grade<49){console.log("e")}
else if(grade<57){console.log("d")}
else if(grade<64){console.log("c")}
else if(grade<74){console.log("b")}
else{console.log("a")} 

//console.log("adult"s)