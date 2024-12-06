// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to print squares of first n prime numbers
function printSquaresOfPrimes(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
        if (isPrime(num)) {
            console.log(`Square of ${num} is ${num * num}`);
            count++;
        }
        num++;
    }
}

// Print squares of first 10 prime numbers
printSquaresOfPrimes(10);