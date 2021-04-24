let btnGreen = document.querySelector('#btnGreen');
let btnBlack = document.querySelector('#btnBlack');
let content = document.querySelector('p');

btnGreen.addEventListener('click',() => content.style.color = 'green');
btnBlack.addEventListener('click',() => content.style.color = 'black');