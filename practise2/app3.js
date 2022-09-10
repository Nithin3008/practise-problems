let name1 = document.querySelector('.name1');
let small = document.querySelector('.small');
let large = document.querySelector('.large')
small.addEventListener('click', small_incr);
function small_incr() {
    name1.style.borderWidth = "5px";
}