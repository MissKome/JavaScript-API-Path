const car = {
    price: 5000,
    color: "red",
    numDoors: 4
};

if (car.price < 5000 && car.color === "red" && car.numDoors === 4) {
    console.log("We will take it")
}else {
    console.log("We will keep looking")
}


if (car.price < 5000 || car.color === "red" && car.numDoors === 4) {
    console.log("We will take it")
}else {
    console.log("We will keep looking")
}