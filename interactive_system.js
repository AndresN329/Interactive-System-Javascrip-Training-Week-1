//program initialization
console.log("Welcome to interactive messaging system");

//Data entry
let name = prompt("Please, enter your name:");
let age = prompt("Please, enter your age:");

//Convert age
age = parseInt(age)

//Validations and messages
if (isNaN(age)) {
    console.error("Error: Please, enter valid age with numbers");
} else if (age < 18){
    alert(`Hello ${name}, you are a minor, continue learning and enjoying the code.`);
} else {
     alert(`Hello ${name}, you are an adult, prepare for great opportunities in programming`);
}