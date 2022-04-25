`use strict`;
console.log(localStorage);
localStorage.clear();
localStorage.setItem("name" , "mohammad");
localStorage.setItem("age","25");
let retreiveItem=localStorage.getItem("name");
console.log(retreiveItem);

localStorage.removeItem("name");