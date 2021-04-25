let price = 35;
let quantity1 = prompt("How many Tiramisu cakes would you like to order?");

function calculateCost(price, quantity1) {
    return price * quantity1;
}

let subtotal = calculateCost(price, quantity1)
document.getElementById("stTiramisu").innerHTML = "You subtotal for Tiramisu is $" + subtotal;

