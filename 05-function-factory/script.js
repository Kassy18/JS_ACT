const double = makeMultiplier(2);
const sayHi = makeGreeter("Hi");
    
function makeMultiplier(factor) {
   return function (number) {
       return number * factor;
    };
}

function makeGreeter(greeting) {
   return function (name) {
        return `${greeting}, ${name}!`;
   };
}

document.getElementById("doubleNumber").innerText = "Double of number 5: " + double(5);      
document.getElementById("greet").innerText = 'Greetings: ' + sayHi("Mia"); 
 
