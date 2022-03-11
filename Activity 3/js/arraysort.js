//sort shapes according to alphabet
const shapes = ["Square", "Circle", "Rectangle", "Triangle"];
document.getElementById("arraySort1").innerHTML = shapes;
//display sorted shapes
shapes.sort();
document.getElementById("arraySort2").innerHTML = shapes;
// Then reverse sorted shapes:
shapes.reverse();

document.getElementById("arrayReverse").innerHTML = shapes;

console.log("Array Sort")