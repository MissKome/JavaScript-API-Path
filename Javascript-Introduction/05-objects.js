const food = {
    name: "chicken and chip",
    isSweet: true
}  
food.name = "rice";
console.log(food)
console.log(food.name) // to see only the name property



//Classes
class Food {
    constructor(name, isSweet) {
this.name = name;
this.isSweet = isSweet;
    }
}
const myFood = new Food("chicken", true);

console.log(myFood)