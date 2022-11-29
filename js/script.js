// 1 - Definire il circolo da 1 a 100
// 2 - Definire le condizioni 
//     2.1 - per i multipli di 3
//     2.2 - per i multipli di 5
//     2.3 - per i multipli di 3 e 5
//     2.4 - per quelli che non sono ne dell'uno, ne dell'altro.
// 3 - Fare il console log nelle condizioni per stampare in console.

let num = 1
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else {
        console.log(num);
    };
    num += 1;
};
