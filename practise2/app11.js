let a = [{
    task: 'dancing',
    completed: true
}
    , {
    task: 'king',
    completed: true
},
{
    task: 'dan',
    completed: false
}]

function checker() {
    for (let i = 0; i < a.length; i++) {
        if (a[i].completed === true) {
            console.log(a[i].task)
        }
    }

}
checker()