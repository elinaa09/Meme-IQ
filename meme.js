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

let Next = document.getElementById("Next")

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
        
            message.textContent = ""
        }
        function chooseOption(button) {
    if (button.textContent === questions[number].answer) {
         message.textContent = "Correct!"
         score = score + 1
         } else {
        message.textContent = "you dont know twin! Answer: " + questions[number].answer
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
        question.textContent = "Done! Your score: " + score + " / " + questions.length
        image.src = ""
        option1.hidden = true
        option2.hidden = true
        option3.hidden = true
        next.hidden = true
        message.textContent = ""
    }
}






