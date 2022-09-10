let inp = document.querySelector('.input1')
let pwd = document.querySelector('.pwd');
let output = document.querySelector('.output')
let btn = document.querySelector('.check1')

function checker() {
    let inp_value = inp.value;
    let pwd1 = pwd.value;
    if (pwd1.includes(inp_value)) {
        output.innerText = "pwd contains ur name"
    }
    else {
        output.innerText = "pwd is ok"
    }
}

btn.addEventListener('click', checker)