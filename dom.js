'use strict';
//console.log(document);
let header = document.getElementById("headerID");
let heading = document.createElement("h1");
//console.log(heading);
heading.textContent="ASAC Coffee House";
//console.log(heading);
heading.style.color="brown";
header.appendChild(heading);

let par = document.createElement("p");
par.textContent="Welcome to our Coffee";
header.appendChild(par);
// create img
let img = document.createElement("img");
img.src="./assets/mocha.png";
img.style.width="100px";
header.appendChild(img);




