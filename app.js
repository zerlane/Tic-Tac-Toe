
let board = document.getElementById('board');
let cell = document.getElementsByClassName('cell');
let currentPlayer = 'X';
let moves = 0;
let winCombos = [
        [1, 2, 3],
        [1, 5, 9], 
        [1, 4, 7],
        [4, 5, 6],
        [2, 6, 8],
        [3, 5, 7],
        [7, 8, 9],
        [3, 6, 9],
    ];
let winArr = {
    X: [],
    O: [],
};
document.addEventListener('DOMContentLoaded', () => {
    board.addEventListener('click', playGame);
});

let playGame = (e) => {
    e.target.innerText = currentPlayer;
    switchPlayer(e);
};

let switchPlayer = (e) => {
    if (e.innerText = '') {
        alert("Something is there.")
    } else if (currentPlayer === 'X') {
        moves++;

        determineWinner(e);
       return currentPlayer = 'O';
    } else if (currentPlayer === 'O') {
        moves++;
        determineWinner(e);
        return currentPlayer = 'X';    
    } 

};

let determineWinner = (e) => {
    let value = parseInt(e.target.attributes[0].value);

    if (currentPlayer === 'X') {
        winArr.X.push(value);
    } else if (currentPlayer === 'O') {
        winArr.O.push(value);
    }
    console.log(winArr)
};

let reset = () => {
    if(determineWinner) {
        alert('restart')
    }
};