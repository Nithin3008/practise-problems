let x = [];
let p = [];
let y = []
for (let k = 0; k < 2; k++) {
    x[k] = y
}

for (let k1 = 0; k1 < 2; k1++) {
    p[k1] = y
}

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        x[i][j] = 5;
    }
}

for (let i1 = 0; i1 < 2; i1++) {
    for (let j1 = 0; j1 < 2; j1++) {
        p[i1][j1] = 7;
    }
}
console.log(x)
console.log(p)
//matrix addition
// let z = []
// let y1 = [2]
// for (let k = 0; k < 2; k++) {
//     z[k] = y1
// }
// for (let i2 = 0; i2 < 2; i2++) {
//     for (let j = 0; j < 2; j++) {
//         z[i2][j] = x[i2][j] + x1[i2][j]
//         console.log(z[i2][j])
//         console.log(x1[i2][j] + x[i2][j])
//     }
// }
// console.log(z)