'use strict';
let person ={
    first_name :"haya" ,
    fav_food : "pizza" ,
    doesLoveCoffee:true,
    doesLoveDog:true,
    driving : function(){
        console.log("Haya drives Toyota");
    },
    summary:function(){
        console.log(this.first_name);
        console.log(`name is ${this.first_name} she likes ${this.fav_food}`);
        
    }

}
console.log(person);
console.log(person.first_name);
console.log(person["first_name"]);
person.summary();
person.fav_food="hut pizza";
console.log(person.fav_food);
person.age=25;
console.log(person.age);
// traverse an object
for (const key in person) {
    console.log(key);
    console.log(person[key]);
    }
