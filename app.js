const board = document.querySelector('#board');


let players = {
    playerX: {
        str: "X",
        cells: []
    },
    playerO: {
        str: "O",
        cells: []
    }
}

let currentPlayer = players.playerX;
let xTurn = true;

const winCombos = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], 
    ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], 
    ['0', '4', '8'], ['2', '4', '6']
]

let cellClicked = (e) => {
    let target = e.target;
    let id = target.id;
    let data_val = target.getAttribute('data-value');

    if(target.innerHTML == "" ) {
        target.innerHTML = currentPlayer.str;
        currentPlayer.cells.push(data_val);

        if (currentPlayer.cells.length >= 3 ) {
           console.log(currentPlayer.cells);
        }
        

        //switch player
        currentPlayer = currentPlayer === players.playerX ? players.playerO : players.playerX;
    }

}

let checkWinner = (...arr) => {
    for(let i = 0; i < winCombos.length; i++) {
        if(arr == winCombos[i]) {
            console.log('won');
        }
    }
}

board.addEventListener('click', cellClicked);