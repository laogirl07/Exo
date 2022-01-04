let firstName = prompt("ton prenom")
let age = Number(prompt("ton age"))

if (age > 18 && firstName == "sofiane") {
    alert("welcome")
} else if (firstName.lenght == age) {
    alert("OK")
} else if (age < 30 && age > 50) {
    alert("okay")
} else if (age < 70 && firstName == "abby" || firstName == "paul") {
    alert("true")
} else {
    alert("go out")
}