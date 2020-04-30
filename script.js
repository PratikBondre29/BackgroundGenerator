var css = document.getElementById("head");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");

function setGradient() {
var result = body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value +")";
css.innerHTML = result + " ;";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

css.innerHTML = result;
