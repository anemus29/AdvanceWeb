// Create and display a variable:
let course = "Visual Arts";
document.getElementById("objectsCourse").innerHTML = course;

// Create an object:
const artMaterial = {type:"Paint", brand:"Senilier", numberOfcolors:"24 number of colors"};

// Display some data from the object:
document.getElementById("objectsArtMaterial").innerHTML = "The art material type is " + artMaterial.type + " and the brand is " + artMaterial.brand + " with " + artMaterial.numberOfcolors;
console.log("Objects")