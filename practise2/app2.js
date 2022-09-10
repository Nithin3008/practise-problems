let btn1 = document.querySelector('.incr')
let btn2 = document.querySelector('.decr');
let ctr = document.querySelector('.counter')
function increase() {

    let val = ctr.textContent;
    console.log(Number(val))
    let sum = Number(val) + 1;
    ctr.innerText = sum;
}
function decrease() {

    let val = ctr.textContent;
    console.log(Number(val))
    let sum = Number(val) - 1;
    ctr.innerText = sum;
}
btn1.addEventListener('click', increase)
btn2.addEventListener('click', decrease)