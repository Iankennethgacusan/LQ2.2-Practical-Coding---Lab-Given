let choices = {
  'A': {item: 'Pepsi Cola', price: 30.00},
  'B': {item: 'Coca Cola', price: 35.00},
  'C': {item: 'Apple (per kg)', price: 100.00},
  'D': {item: 'Orange (per kg)', price: 120.00},
  'E': {item: 'Hotdogs (per kg)', price: 180.00}
};

console.log("Price List:");
for (let choice in choices) {
  console.log(`${choice}. ${choices[choice].item} - Php ${choices[choice].price}.00`);
}

let itemChoice = prompt("Enter your choice (A-E):").toUpperCase();
let quantity = parseInt(prompt("Enter quantity:"));


if (choices[itemChoice]) {
    if(isNaN(quantity) || quantity <= 0){
        console.log("Invalid quantity. Please enter a positive number.");
    } else {
        let totalPrice = choices[itemChoice].price * quantity;
        console.log(`Total cost for ${quantity} ${choices[itemChoice].item}: Php ${totalPrice}.00`);
    }
} else {
  console.log("Invalid choice.");
}
