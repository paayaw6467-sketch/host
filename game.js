// === GAME STATE ===
let board = ["","","","","","","","",""]
let active = true

const cells = document.querySelectorAll(".cell")
const status = document.getElementById("status")

cells.forEach(cell => cell.addEventListener("click", playerMove))

// === START GAME ===
function startGame(){
document.getElementById("menu").style.display = "none"
document.getElementById("game").style.display = "block"
}

// === PLAYER MOVE ===
function playerMove(){
let i = this.dataset.i

if(board[i] !== "" || !active) return

board[i] = "X"
this.textContent = "X"

checkWinner()

if(active){
setTimeout(botMove, 400)
}
}

// === BOT MOVE ===
function botMove(){
status.textContent = randomTaunt()

let move = bestMove()

board[move] = "O"
cells[move].textContent = "O"

checkWinner()
}

// === RESTART ===
function restart(){
board = ["","","","","","","","",""]
active = true

cells.forEach(c=>{
c.textContent = ""
c.classList.remove("win")
})

status.textContent = "Your Move"
}

// === WINNER CHECK (UPDATED) ===
function checkWinner(){
let res = checkMini()

if(res !== null){
active = false

if(res === "draw"){
status.textContent = "Draw!"
}else if(res === "X"){
status.textContent = "Btech Wins"
}else if(res === "O"){
status.textContent = "Godtech Wins"
}
}
}