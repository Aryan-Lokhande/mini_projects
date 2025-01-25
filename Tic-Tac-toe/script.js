console.log('Welcome to Tic Tac Toe')
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let isgameover = false

let turn = "X"

//Function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check win
const checkWin = () => {
    let textBox = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((textBox[e[0]].innerText === textBox[e[1]].innerText) && (textBox[e[2]].innerText === textBox[e[1]].innerText) && (textBox[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = textBox[e[0]].innerText + " won"
            isgameover = true
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px"
            gameOver.play()
        }
    })
}

//Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerHTML === '') {
            boxText.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText')
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X";
    isgameover = false
    document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px"
})
