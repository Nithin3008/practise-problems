
//Fizzbuzz problem
for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Fizzbuzz, ')
    }
    else if (i % 3 === 0) {
        console.log('fizz, ')
    }
    else if (i % 5 === 0) {
        console.log('buzz, ')

    }

    else {
        console.log(i)
    }
}