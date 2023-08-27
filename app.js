//https://webtips.dev/tic-tac-toe-in-javascript

let gameEnded = false;
let playerX = {
    str: 'X',
    cells: [],
};
let playerO = {
    str: 'O',
    cells: [],
};
let currentPlayer = playerX;
let winCombos = [
    //rows
    ['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'],

    //diagonal
    ['0', '4', '8'], ['2', '4', '6'],

    //columns
    ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8']
]

document.addEventListener("click", event => {
    let target = event.target;
    let data_val = target.getAttribute('data-value');

    if (target.textContent.length == 0) { //Change later, might not be the smartest way
        currentPlayer.cells.push(data_val);
        target.innerText = currentPlayer.str;
    } else {
        console.log("Occupied");
    }

    if (playerX) {
        return currentPlayer = playerO;
    }
    if (playerO) {
        return currentPlayer = playerX;
    }

});