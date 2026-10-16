let score = localStorage.getItem("score")
let total = localStorage.getItem("total")

let result = document.getElementById("result")
let again = document.getElementById("again")

result.textContent = "Your score: " + score + " / " + total

again.onclick = function () {
    window.location.href = "index.html"
}