
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
    if (e.innerHTML = '') {
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
    let value = e.target.attributes[0].nodeValue;
    console.log(value);
    //console.log(e.target.attributes[0].nodeValue);
    if (currentPlayer === 'X') {
        console.log(value);
        
        //let pushX = playerObj.X.push(value);
        //console.log(pushX)
        //console.log('X: ' + playerObj.X.push(value))
        //return playerObj.X.push(value);
    } else if (currentPlayer === 'O') {
        //console.log('O: ' + playerObj.X.push(value))
       // return playerObj.O.push(value);
    }
};

let reset = () => {
    if(determineWinner) {
        alert('restart')
    }
};