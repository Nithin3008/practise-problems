let url = 'https://mock-practice.prakhar10v.repl.co/bollywood?name='
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

function checker(e) {

    let x = e.target.textContent
    // console.log(x)
    let url2 = url + `${e.target.textContent}`
    // console.log(url2)
    console.log(url2)
    fetch(url2)
        .then(res => res.json())
        .then(rs1 => console.log(rs1))
}
btn1.addEventListener('click', checker)
btn2.addEventListener('click', checker)