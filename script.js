//import {without} from lodash;
//console.log(without);
var _ = require('lodash');
//Test console: console.log(_);

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")" ;
    css.textContent = body.style.background + ",";
}
//linear-gradient(to right, rgb(54, 217, 54), rgb(0, 17, 255)),
