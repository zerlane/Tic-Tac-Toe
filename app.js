document.addEventListener("DOMContentLoaded", () => {
    console.log("Arrived");
})

let gameEnded = false;
let boxes = document.getElementsByClassName("box");
let winCombos = [
    //rows
    ['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],

    //diagonal
    ['1', '5', '9'], ['3', '5', '7'],

    //columns
    ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9']
]





console.log(boxes)