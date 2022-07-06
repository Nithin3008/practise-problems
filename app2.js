//highest student marks

var readlineSync = require('readline-sync');
let students = []
for (let i = 0; i < 5; i++) {
    let unitmarks = readlineSync.question(`enter student ${i + 1} unit test marks: `)
    let preFinalMarks = readlineSync.question(`enter student ${i + 1} prefinal marks: `)
    let finalMarks = readlineSync.question(`enter student ${i + 1} final marks: `)
    let sum = Number(unitmarks) + Number(preFinalMarks) + Number(finalMarks)
    students.push(sum)
}
let max = students[0]
let index = 0
for (let i = 1; i < students.length; i++) {
    if (max < students[i]) {
        max = students[i];
        index = i
    }
}
console.log(max)
console.log(`student ${index + 1} has the ${max} marks`)
let total = students.reduce((accr, val) => accr + val) / students.length
console.log(students)
console.log(total)