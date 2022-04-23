'use strict';
let sectionEl= document.getElementById("cardSection");
console.log(sectionEl);
let allDrinks=[];
function Drink (name,ingredients,image,isCold,isHot,price){
    this.name=name;
    this.ingredients=ingredients;
    this.image=image;
    this.isCold=isCold;
    this.isHot=isHot;
    this.price=price;
    allDrinks.push(this);
}
Drink.prototype.render=function(){
    // console.log(this.name);
    // document.write(`<h1>the name of dirink is"  ${this.name}</h1>`)
    let name = document.createElement("h3");
    name.textContent=this.name;
    sectionEl.appendChild(name);

    // create image
    let imageEl= document.createElement("img");
    imageEl.src=this.image;
    sectionEl.appendChild(imageEl);

    // price
    let price=document.createElement("p");
    price.textContent=`${this.price} JD`;
    sectionEl.appendChild(price);

    // Ingrediants
    let orderListEl=document.createElement("ol");  
    sectionEl.appendChild(orderListEl);
    for (let i =0; i < this.ingredients.length; i++) {
        let list = document.createElement("li");
        list.textContent=this.ingredients[i];
        orderListEl.appendChild(list);
        
    }

}
let latte = new Drink("Latte",["milk" , "coffee", "ice", "sugar"], "./assets/latte.png",true ,true , 1);
let mocha = new Drink("mocha",["milk" , "coffee", "ice", "sugar"], "./assets/mocha.png",true ,true , 2);
let hotchoclate = new Drink("hot choclate",["milk" , "coffee", "ice", "sugar"], "./assets/espresso.png",true ,true , 3);

//console.table(latte);
//console.table(mocha);
//latte.render();
//mocha.render();
//console.log(allDrinks);

for (let i = 0;  i < allDrinks.length; i++) {
    allDrinks[i].render();  // this call function render

    
}