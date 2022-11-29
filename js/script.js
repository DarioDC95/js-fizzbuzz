// 1 - Definire il circolo da 1 a 100
// 2 - Definire le condizioni 
//     2.1 - per i multipli di 3
//     2.2 - per i multipli di 5
//     2.3 - per i multipli di 3 e 5
//     2.4 - per quelli che non sono ne dell'uno, ne dell'altro.
// 3 - Fare il console log nelle condizioni per stampare in console.

let quadrati = document.getElementById("boxes");
let num = 1;
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        quadrati.innerHTML += `<div class="box box-red">FizzBuzz</div>`;
        console.log("FizzBuzz");
    }
    else if (i % 5 == 0) {
        quadrati.innerHTML += `<div class="box box-yellow">Buzz</div>`;
        console.log("Buzz");
    }
    else if (i % 3 == 0) {
        quadrati.innerHTML += `<div class="box box-green">Fizz</div>`;
        console.log("Fizz");
    }
    else {
        quadrati.innerHTML += `<div class="box box-blue">${num}</div>`;
        console.log(num);
    };
    num += 1;
};
