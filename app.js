'use strict';
let sectionEl= document.getElementById("cardSection");
let formEl = document.getElementById("formID");
console.log(sectionEl);
let allDrinks=[];
let tableEl = document.getElementById("tableID");
function Drink (name,ingredients,image,isCold,isHot,price){
    this.name=name;
    this.ingredients=ingredients;
    this.image=image;
    this.isCold=isCold;
    this.isHot=isHot;
    this.price=price;
    allDrinks.push(this);
}
Drink.prototype.renderTable=function(){
    let tr=document.createElement("tr");
    tableEl.appendChild(tr);
     
    let nameTd=document.createElement("td");
    nameTd.textContent=this.name;
    tr.appendChild(nameTd);

    let priceTd=document.createElement("td");
    priceTd.textContent=this.price;
    tr.appendChild(priceTd);
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

//renderAll();

function renderAll(){
for (let i = 0;  i < allDrinks.length; i++) {
    allDrinks[i].render();  // this call function render
    allDrinks[i].renderTable();
   
}
}

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    // the default behaviour of submitting the form is to refresh the page
    event.preventDefault();

    console.log("Form event", event);
    // for text input
    let drinkName = event.target.drinkName.value
    let ingredients = event.target.ingredients.value;
    let image = event.target.image.value;
    let price = event.target.price.value;
    // for checkbox input
    let cold = event.target.cold.checked; // true or false
    let hot = event.target.hot.checked;
    // split will conver the string to an array
    //string: "tea , water"
    // after split: ["tea", "water"]

    let ingredientsArr = ingredients.split(",");
    console.log(ingredientsArr);

    // create a new drink

    let newDrink = new Drink(drinkName, ingredientsArr, image, cold, hot, price);

    newDrink.render();
    saveData(allDrinks);
    
}
function saveData(data){
    let stringfiyData = JSON.stringify(data);
    localStorage.setItem("Drinks", stringfiyData);
}
console.log("before saving it to ls " , allDrinks)

function getData()
{
    let retrieveData = localStorage.getItem("Drinks");
    let arrayData= JSON.parse(retrieveData);
    if(arrayData != null){
    for (let i = 0; i < arrayData.length; i++) {
        new Drink(arrayData[i].name, arrayData[i].ingredients,arrayData[i].image,arrayData[i].isCold , arrayData[i].isHot,arrayData[i].price);
         renderAll();
    }
}
   // console.log("after retreiving from ls ", allDrinks);
}

getData();