var url = 'https://jsonplaceholder.typicode.com/dummyUsers'
var btn = document.querySelector('.btn')
var out = document.querySelector('.out')
btn.addEventListener('click', function () {
    fetch(url)
        .then(res => {
            if (res.status = 404) {
                out.innerText = '404 page not found'
            }
            else if (res.status = 401) {
                out.innerText = '401 you are not logged in'
            }
        })
})