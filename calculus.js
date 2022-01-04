let x = Number(prompt("ton premier nombre"));
let signe = prompt("signe");
let y = Number(prompt("ton deuxième nombre"));

if (signe == "+") {
    alert(x + y)
} else if (signe == "*") {
    alert(x * y)
} else if (signe == "/") {
    alert(x / y)
} else if (signe == "-") {
    alert(x - y)
} else {
    alert("non")
}