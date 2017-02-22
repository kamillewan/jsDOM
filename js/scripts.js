/*
// FUNKCJA DO POJEDYŃCZEGO WYWOŁYWANIA NP: ALLERTA

function zaalertuj() {
  alert('Wyświetlam się jednokrotnie po 2 sekundach.');
}

var opoznioneWywolanie = setTimeout(zaalertuj, 2000);

// FUNKCJA DO WYŁĄCZANIA FUNKCJI WYWOŁYWANIA:

clearTimeout(opoznioneWywolanie);


// FUNKCJA DO WIELOKROTNEGO WYWOŁYWANIA (co określony czas) NP: ALLERTA

function alertuj() {
  alert('Wyświetlam się co 3 sekundy.')
}

var interval = setInterval(alertuj, 3000);

// FUNKCJA DO WYŁĄCZANIA FUNKCJI WYWOŁYWANIA WIELOKROTNEGO:

function stop() {
  alert('Minęło 10 sekund. Następująca instrukcja przerywa interwał.');
  clearInterval(interval);
}

setTimeout(stop, 10000);


console.log(document); // lub window.document

// PRZEKIEROWANIE NA INNA STRONE
//window.location = 'http://www.kodilla.pl';

var navigation = document.getElementById('nav');
console.log(navigation);

*/

var alertBtn = document.getElementsByClassName('button');

console.log(alertBtn);

var x = alertBtn.length;

for (a = 1; a <= x; a++) { 
  var b = alertBtn.innerText;
  alert ('Nazwa przycisku: '+ b);
}