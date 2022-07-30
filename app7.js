var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="
let output = document.querySelector('.out')
let text1 = document.querySelector('.text1')
let btn1 = document.querySelector('.btn1')
btn1.addEventListener('click', function () {
    let inputText = text1.value
    let setUrl = url + "?" + "text=" + inputText
    let x = ''
    fetch(setUrl)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            console.log(json.contents.translated),
                x = json.contents.translated
            console.log(x.toUpperCase())
        })
})
