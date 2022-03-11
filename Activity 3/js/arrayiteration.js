const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("arrayIteration").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>"; 
}
console.log("Array Iteration")