
let btn = document.createElement("button");
btn.innerHTML = "The time is?";
btn.addEventListener("click", function displayDate() {
    document.getElementById("events").innerHTML = Date();
  });
  document.body.appendChild(btn);
console.log("Events")


