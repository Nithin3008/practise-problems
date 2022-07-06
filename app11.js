var pass = document.querySelector('.pwd')
var btn1 = document.querySelector('.btn1')
btn1.disabled = true
pass.addEventListener('input', function () {

    let x = pass.value
    console.log(x)
    console.log(x.length)
    if (x.length >= 10) {
        btn1.disabled = false
        pass.style.color = "#00FF00"
    }
    else {
        btn1.disabled = true
        pass.style.color = "#FF0000"
    }
})
