//loops allow us to repeat code over and over again

//Classic for loop: A for loop is absolutely great for repeating a task, a set number of times.

const names = ["James" , "John" , "Mark", "Doe"]
for (let i = 0; i < names.length; i++) {
    console.log(names[i]); 

}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let j = 0; j < numbers.length; j++){
    console.log(numbers[j]);
    console.log(numbers[j] * 2) //to double the number
}

