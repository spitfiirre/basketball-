const homeScoreEl = document.getElementById("home-count")
const guestScoreEl = document.getElementById("guest-count")
let homeScore = 0
let guestScore = 0
updateScore()

function updateScore() {
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

function increaseHome(value) {
    homeScore += value
    updateScore()
}

function increaseGuest(value) {
    guestScore += value
    updateScore()
}