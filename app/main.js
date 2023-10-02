
const dice = document.querySelector(".dice")
const adviceNum = document.querySelector('.advice-number')
const quote = document.querySelector('.quote')

window.addEventListener('load', getAdvice)
dice.addEventListener('click', getAdvice)

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")

    .then(response => response.json())
    
    .then(advice => {

        adviceNum.innerHTML = advice.slip.id

        quote.innerHTML = advice.slip.advice

    })
}