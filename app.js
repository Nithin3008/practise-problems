let head1 = document.querySelector('.heading1')
let head2 = document.querySelector('.heading2')
let head3 = document.querySelector('.heading3')
let text = document.querySelector('.tex')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')

// let txt1 = text.value
btn1.addEventListener('click', function () {

    head1.innerText = text.value

})
btn2.addEventListener('click', function () {

    head2.innerText = text.value
})
btn3.addEventListener('click', function () {

    head3.innerText = text.value
})
console.log('hello')

///////////////////////////////////////////////////////////////// second method
