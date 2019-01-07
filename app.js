let board = document.getElementById('board');
let cell = document.getElementsByClassName('cell');
let currentPlayer = 'X';
let moves = 0,
    winCombos = [
        [1, 2, 3],
        [1, 5, 9], 
        [1, 4, 7],
        [4, 5, 6],
        []
    ]

document.addEventListener('DOMContentLoaded', () => {
    board.addEventListener('click', clickedCell);
});

let clickedCell = (e) => {
    e.target.innerText = currentPlayer;
    switchPlayer();
    determineWinner();
};

let switchPlayer = () => {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
        moves++;
    } else if (currentPlayer === 'O') {
        currentPlayer = 'X';
        moves++;
    }

    console.log("move" + moves)
};

let determineWinner = () => {
    if(moves === 9) {
        alert('Game over.')
        //reset();
    }
};

let reset = () => {
    if(determineWinner) {
        alert('restart')
    }
};