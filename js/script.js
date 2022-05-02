// 1. Stampare in console i numeri da 1 a 100.
for (let i = 1; i <= 100 ; i++) {
    // 2. Se i è multiplo sia di 3 che di 5 stampare "FizzBuzz" al posto del numero.
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

        // 3. Se i è multiplo di 3 stampare "Fizz" al posto del numero.
    } else if (i % 3 === 0) {
        console.log("Fizz");

        // 4. Se i è multiplo di 5 stampare "Buzz" al posto del numero.
    } else if (i % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(i);
    }
}

// 5. Creare all'interno del div.row dei div.col con all'interno il numero corrispondente.
const row = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    const col = document.createElement("div");
    row.append(col);
    // 6. Applicare una classe differente a seconda del valore dell'indice per i multipli di 3, di 5 e di entrambi.
    if (i % 3 === 0 && i % 5 === 0) {
        col.classList.add("col", "col-fizzbuzz");
        col.innerText = "FizzBuzz";
    } else if (i % 3 === 0) {
        col.classList.add("col", "col-fizz");
        col.innerText = "Fizz";
    } else if (i % 5 === 0) {
        col.classList.add("col", "col-buzz");
        col.innerText = "Buzz";
    } else {
        col.classList.add("col");
        col.innerText = i;
    }
}