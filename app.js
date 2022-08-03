const form = document.querySelector(".main");
const aInput = document.querySelector("#a");
const bInput = document.querySelector("#b");
const inline = document.querySelector("#inline");
console.log(bInput)
form.addEventListener("submit", (e) => {
    const results = [];
    e.preventDefault();
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    for (let i = a; i <= b; i++) {
        const isPrime = isPrimeNumber(i);
        if (isPrime) {
            results.push(i);
        }
    }
     inline.innerText = 
    "asdad " + JSON.stringify(results);
})

function isPrimeNumber(num) {
    if (num < 2) {
        return false;
    }
    let count = 0;
    for ( let i = 2 ; i<= Math.sqrt(num); i++) {
        if (num % i == 0) {
            count++ ;
        }
    }
    if (count === 0 ) return true;
    else return false;
}