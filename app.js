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
let currentPlayer;
let xTurn = true;

let winCombos = [
    //rows
    ['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'],

    //diagonal
    ['0', '4', '8'], ['2', '4', '6'],

    //columns
    ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8']
]

let board = document.getElementById('board');

board.addEventListener("click", event => {
    let target = event.target;
    let data_val = target.getAttribute('data-value');

    if (xTurn) {
        currentPlayer = playerX;
        xTurn = false;
    } else {
        currentPlayer = playerO;
        xTurn = true;
    }

    currentPlayer.cells.push(data_val);

    //check winner here then move to own function
    // if (currentPlayer.cells.length == 3) {
    //     winCombos.forEach(arr => {
    //         if (arr == currentPlayer.cells) {
    //             console.log(`${currentPlayer.str} won.`)
    //         }
    //     })
    // }

    console.log(target);
    target.innerHTML = `<p>${currentPlayer.str}</p>`    
});

let fillBox = () => {
   
}

let switchPlayers = () => {
   
};

let checkWinner = () => {

    //determine if draw
};

let resetGame = () => {

}