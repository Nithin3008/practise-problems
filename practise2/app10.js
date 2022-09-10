let url = 'https://jsonplaceholder.typicode.com/todos';
let btn = document.querySelector('.btn')

function checker() {
    fetch(url)
        .then(res => res.json())
        .then(res1 => console.log(res1[10].title))
}
btn.addEventListener('click', checker)