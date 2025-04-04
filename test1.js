const prompt= require("prompt-sync")();
const age = prompt("What is your age: ")

if(age<18){console.log("underage")}
else if(age<=30){console.log("youth")}
else{console.log("adult")} 

//console.log("adult"s)