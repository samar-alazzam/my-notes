'use strict';
function Person (first_name , fav_food , doesLoveCoffee , doesLoveDog){
    this.first_name =first_name;
    this.fav_food = fav_food;
    this.doesLoveCoffee= doesLoveCoffee;
    this.doesLoveDog=doesLoveDog;
   

} 
Person.prototype.summary=function(){
    console.log(this.first_name);
            console.log(`name is ${this.first_name} she likes ${this.fav_food}`);

}
let haya = new Person("haya", "pizza" , true , true);
console.log(haya);
let esam = new Person("esama", "mansaf" , true , false);
console.log(esam);
haya.summary();
