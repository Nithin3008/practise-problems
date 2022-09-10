let user_input = document.querySelector('.input1');
let log_btn = document.querySelector('.log');
let warm_btn = document.querySelector('.warm');
let error_btn = document.querySelector('.error');
let output = document.querySelector('.output')
function log_action() {
    let input_val = user_input.value;
    output.innerText = input_val;
    output.style.color = "yellow"
}
function warm_action() {
    let input_val = user_input.value;
    output.innerText = input_val;
    output.style.color = "red"
}
log_btn.addEventListener('click', log_action)
warm_btn.addEventListener('click', warm_action)