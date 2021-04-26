function bdPrompt() {

    let bdConfirm = prompt("Is it your birthday? Answer Yes or No?");
    return bdConfirm
}   
// asking for a user to put "yes" or "no" and stores the result

function bdMessage(answer1) {
// if user answers "yes", the greeting will be "Happy birthday".    
    if (answer1.toLowerCase() == "yes") {
        document.write('<h3>Happy Birthday!</h3>');
        //then it will prompt user to enter their age
        age = prompt("How old are you turning today?");
        url = "images/hZHbig.gif";
        for(let i=0; i < age; i++) {
            document.write('<img id="candle" src="' + url + '">')
        }
        // they page will show number of candles equal to their age
    } else {
        greetTime()
// if answer is other than "yes", they will be greeted with time of day    
    }
}
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
        greeting = 'Welcome';
    }
    
    document.write('<h3>' + greeting + '</h3>')
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

    let quantity = prompt("How many Tiramisu cakes would you like to order? Enter a number between 1 and 5");
    while (quantity != "0" && quantity != "1" && quantity != "2" && quantity != "3" && quantity != "4" && quantity != "5") {
        quantity = prompt("Wrong input! The maximum order is 5. Enter a number between 1 and 5, or 0 if you don't want any.");
    }
    let price = 35;
    let cost = price * quantity;
    document.write('<p> Your subtotal for Tiramisu is $' + cost + '</p>');
    // if a user enters a number between 0 and 5, they will proceed on page. then it will calculate the price of tiramisu.
    // if they enter anythyong else, the second message will keep appearing. 
}


