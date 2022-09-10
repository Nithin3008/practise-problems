let url = 'https://quick-access-api.desaihetav.repl.co/'
let btn = document.querySelector('.linker')
function link() {
    fetch(url)
        .then(res => res.json())
        .then(res1 => console.log(res1))
    // .then(out => console, log(out))
}
btn.addEventListener('click', link)