
function display(val) {
document.getElementById("screen").value+=val
 }

function solve() {
let a = document.getElementById("screen").value
let b = eval(a)
document.getElementById("screen").value = b
}

function clr() {
document.getElementById("screen").value = ""
}
