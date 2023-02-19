let num1 = 72
let num2 = 8
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let ansEl = document.getElementById("ans-el")

function add() {
    let sum = num1 + num2
    ansEl.textContent = "Sum: " + sum
}

function subtract() {
    let difference = num1 - num2
    ansEl.textContent = "Difference: " + difference
}

function multiply() {
    let product = num1 * num2
    ansEl.textContent = "Product: " + product
}

function divide() {
    let quotient = num1 / num2
    ansEl.textContent = "Quotient: " + quotient
}

