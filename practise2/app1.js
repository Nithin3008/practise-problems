let user_input = document.querySelector('.text1');
let btn1 = document.querySelector('.btn');

btn1.disabled = true;
// user_input.onchange = checker();
function checker() {
    console.log(user_input.value)
    // console.log('hello')

    let input_len = user_input.value
    console.log(Number(input_len.length))
    if (input_len.length > 10) {
        btn1.disabled = false;
    }
}
user_input.addEventListener('input', checker)