//Matrix creation
let x = [];
let y = [2]
for (let k = 0; k < 3; k++) {
    x[k] = y
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        x[i][j] = 4;
    }
}
console.log(x)