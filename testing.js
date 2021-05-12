//function for displaying values
function display(val)
{
document.getElementById("screen").value+=val
 }
//function for evaluation
function solve()
{
let a = document.getElementById("screen").value
let b = eval(a)
document.getElementById("screen").value = b
}
//function for clearing the display
function clr()
{
document.getElementById("screen").value = ""
}
