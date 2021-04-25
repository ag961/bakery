function greetTime() {
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;

    if (hourNow > 18) {
        greeting = 'Good evening,';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon,';
    } else if (hourNow > 0) {
        greeting = 'Good morning,';
    } else {
        greeting = 'Welcome'
    }
    
    document.write('<h3>' + greeting + '</h3>');
}

function name() {
    let name = prompt("What's your name?");

    document.write("<h2>" + name + "!</h2>");
}

function colorChange() {
    let btnGreen = document.querySelector('#btnGreen');
    let btnBlack = document.querySelector('#btnBlack');
    let content = document.querySelector('p');

    btnGreen.addEventListener('click',() => content.style.color = 'green');
    btnBlack.addEventListener('click',() => content.style.color = 'black');
    
}

function calculateCost() {

    let quantity = prompt("How many Tiramisu cakes would you like to order?");
    let price = 35
    let cost = price * quantity
    document.write('Your subtotal for Tiramisu is $' + cost);
    return cost;
}


