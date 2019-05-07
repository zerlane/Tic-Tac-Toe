
let board = document.getElementById('board');
let cell = document.querySelectorAll('cell');
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
let playerObj = {
    X: [],
    O: [],
};
document.addEventListener('DOMContentLoaded', () => {
    board.addEventListener('click', playGame);
});

let playGame = (e) => {
    e.target.innerHTML = currentPlayer;
    switchPlayer(e);
};

let switchPlayer = (e) => {
    let value = e.target.attributes[0].nodeValue;
    determineWinner(e);
    //console.log(`Switch function: ${value}`);
    if (e.innerHTML = '') {
        alert("Something is there.")
    } else if (currentPlayer === 'X') {
        moves++;
        determineWinner(e);
        return (currentPlayer = 'O', playerObj.O.push(value));
    } else if (currentPlayer === 'O') {
        moves++;
        determineWinner(e);
        return (currentPlayer = 'X', playerObj.X.push(value));    
    } 
};

let determineWinner = (e) => {
    if(playerObj.X.length === 3) {
    //    winCombos.some(arr => {
    //        console.log(`${currentPlayer} won`);
    //        return arr === playerObj.X;
    //    })
    winCombos.includes(playerObj.X);
    console.log('something')
    } else if (playerObj.O.length === 3) {
        winCombos.includes(playerObj.O);
    }
    
};

let reset = () => {
    if(determineWinner) {
        alert('restart')
    }
};