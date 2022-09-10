let url = 'https://otpgenerator.ishanjirety.repl.co/get-otp?name='
let nsme1 = document.querySelector('.user_Name')
let btn1 = document.querySelector('.btn')
let g_otp = document.querySelector('.otp')
function checker() {
    let url2 = url + `${nsme1.value}`
    let val = g_otp.value;
    fetch(url2)
        .then(res => res.json())
        .then(function (res) {
            let val2 = res.otp
            console.log(res.otp)
            if (val2.includes(val)) {
                console.log('success')
            }
            else {
                console.log('failed')
            }
        })
}
btn1.addEventListener('click', checker)