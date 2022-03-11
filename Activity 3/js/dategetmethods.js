const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const datemonth = new Date();
let month = months[datemonth.getMonth()];
document.getElementById("dateGetMethods").innerHTML = month;

console.log("Date Get Methods")