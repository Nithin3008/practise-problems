let btn = document.querySelector('.btn1');
let url = 'https://mystery-api.kushanksriraj.repl.co/get';

function checker() {
    fetch(url)
        .then(res => console.log(res))
    // .then(res1 => console.log(res1))
}

btn.addEventListener('click', checker)