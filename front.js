let genre = ""

let continueButton = document.getElementById("continue")
let indian = document.getElementById("indian")
let international = document.getElementById("international")
let message = document.getElementById("message")

let clickSound = new Audio("assets/click.mp3")

function playClick() {
    clickSound.currentTime = 0
    clickSound.play()
}


indian.onclick = function () {
genre = "indian"
    message.textContent = "You picked indian"
}

international.onclick = function () {
genre = "international"
    message.textContent = "You picked international"
}

continueButton.onclick = function () {
    if (genre === "") {
        message.textContent = "Pick a genre first"
    } else {
        localStorage.setItem("genre", genre)
        window.location.href = "meme.html"
    }
}