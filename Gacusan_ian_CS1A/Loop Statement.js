let dog_breed = prompt("Enter dog breed:");
let print_count = parseInt(prompt("How many times to print?"));

if (isNaN(print_count) || print_count <=0){
    console.log("Invalid print count. Please enter a positive number.");
} else {
    for (let i = 0; i < print_count; i++) {
        console.log(dog_breed);
    }
}

