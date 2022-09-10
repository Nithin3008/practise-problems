//Maximum num

let x = 181;
let y = 23;
let z = 200;

function max() {
    if (x > y) {

        if (x > z) {
            console.log('x is bigger')
        }
        else {
            console.log('z is bigger')
        }
    }
    else if (y > z) {
        console.log('y is bigger')
    }
    else {
        console.log('z is bigger')
    }
}
max()