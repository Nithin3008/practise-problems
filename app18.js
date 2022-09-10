//Minimum num

let x = 51;
let y = 2;
let z = 20;

function max() {
    if (x < y) {

        if (x < z) {
            console.log('x is smaller')
        }
        else {
            console.log('z is smaller')
        }
    }
    else if (y < z) {
        console.log('y is smaller')
    }
    else {
        console.log('z is smaller')
    }
}
max()