var url = 'https://unitube-server.herokuapp.com/playlists'
var btn = document.querySelector('.btn1')
var out = document.querySelector('.output')
btn.addEventListener(('click'), function () {

    fetch(url)
        .then(res => {
            out.innerText = res.statusText
        })
})
