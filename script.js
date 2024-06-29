let turn = "x";
title = document.querySelector(".title");
let square;

let squares = [];

function winner(){
    //Get all squares and store them in array
    for(let i=0 ; i<10 ; i++){
        squares[i] = document.getElementById("item"+1);
    }

}

function game(id){
    // query square element
    square =  document.getElementById(id)

    // check if it's X turn and the square is empty
    if(turn === "x" && !(square.textContent)){
        // change text content to "X"
        square.textContent = "X";
        // move turn to "O"
        turn = "o";
        title.innerHTML = "O TURN"
        
    }

    // check if it's O turn and the square is empty
    else if(turn === "o" && !(square.textContent)){

        // change text content to "O"
        square.textContent = "O";
        // move turn to "X"
        turn = "x";
        title.innerHTML = "X TURN"
    }

}

