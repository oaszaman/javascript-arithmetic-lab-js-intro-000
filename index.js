function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

var number = 10

function add5() {
  number += 5
}

function divideBy3() {
  number /= 3
}

divideBy3()

console.log(number) // 3.333333333335

add5()

console.log(number) // 8.333333333335

// reset number
number = 10

add5()

console.log(number) // 15

divideBy3()

console.log(number) // 5


function increment(n) {
 n += 1
}

function decrement (n) {
n -= 1
}

parseInt('2', 10)