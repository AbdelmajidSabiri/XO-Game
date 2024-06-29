let turn = "x";
let square;

function game(id){
    // query square element
    square =  document.getElementById(id)

    // check if it's X turn and the square is empty
    if(turn === "x" && !(square.textContent)){
        // change text content to "X"
        square.textContent = "X";
        // move turn to "O"
        turn = "o";
    }

    // check if it's O turn and the square is empty
    else if(turn === "o" && !(square.textContent)){

        // change text content to "O"
        document.getElementById(id).textContent = "O";
        // move turn to "X"
        turn = "x";
    }
    
}

