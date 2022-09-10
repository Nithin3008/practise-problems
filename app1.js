let text = document.querySelector('.text1')
let red = document.querySelector('.red')
let green = document.querySelector('.green')
let blue = document.querySelector('.blue')
let output = document.querySelector('.output')
red.addEventListener('click', function () {
    console.log('hello')

    output.innerText = text.value
    output.style.color = '#FF0000'
})
green.addEventListener('click', function () {


    output.innerText = text.value
    output.style.color = '#00FF00'
})
blue.addEventListener('click', function () {


    output.innerText = text.value
    output.style.color = '#0000FF'
})

dadgh.addEventListener('click', function () {


    output.innerText = text.value
    output.style.color = '#0000FF'
})