let questions = []
let number = 0
let score = 0
let genre = localStorage.getItem("genre")

let message = document.getElementById("message")
let image = document.getElementById("image")
let question = document.getElementById("question")
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let scoreText = document.getElementById("score")
let next = document.getElementById("next")

let clickSound = new Audio("assets/click.mp3")

let bgMusic = new Audio("assets/bg.mp3")
bgMusic.loop = true
bgMusic.volume = 0.3

function playClick() {
    clickSound.currentTime = 0
    clickSound.play()

    bgMusic.play()
    clickSound.currentTime = 0
    clickSound.play()
}


fetch("meme.json")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].genre === genre && data[i].question !== "") {
                questions.push(data[i])
            }
        }
        showQuestion()
    })

        function showQuestion() {
            image.src = questions[number].image
            question.textContent = questions[number].question
            option1.textContent = questions[number].option1
            option2.textContent = questions[number].option2
            option3.textContent = questions[number].option3

            option1.disabled = false
            option2.disabled = false
            option3.disabled = false
            message.textContent = ""
            next.style.display = "none"
        }
        
        function chooseOption(button) {
            playClick()
            next.style.display = "block"

            option1.disabled = true
            option2.disabled = true
            option3.disabled = true

            if (button.textContent === questions[number].answer) {
                message.textContent = "Correct!"
                score = score + 1
                scoreText.textContent = "Score: " + score
            } else {
                message.textContent = "you dont know twin!" + questions[number].answer
    }
}
option1.onclick = function () { chooseOption(option1) }
option2.onclick = function () { chooseOption(option2) }
option3.onclick = function () { chooseOption(option3) }

next.onclick = function () {
    number = number + 1
    if (number < questions.length) {
        showQuestion()
    } else {
        localStorage.setItem("score", score)
        localStorage.setItem("total", questions.length)
        window.location.href = "last.html"

    }
}






