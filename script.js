let turn = "x";
title = document.querySelector(".title");
let square;

let squares = [];


function winnerConfig(num1,num2,num3){
    title.innerHTML = `${squares[num1]} IS THE WINNER`;
    document.getElementById("item"+num1).style.background = "#000";
    document.getElementById("item"+num2).style.background = "#000";
    document.getElementById("item"+num3).style.background = "#000";
    
    setInterval(function(){title.innerHTML += "."},1000);
    setTimeout(function(){location.reload()},4000);
}




function winner(){
    //Get all squares and store them in array
    for(let i=1 ; i<10 ; i++){
        squares[i] = document.getElementById("item"+i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1]){
        winnerConfig(1,2,3);
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4]){
        winnerConfig(4,5,6);
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7]){
        winnerConfig(7,8,9);
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1]){
        winnerConfig(1,5,9);
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1]){
        winnerConfig(1,4,7);
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2]){
        winnerConfig(2,5,8);
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3]){
        winnerConfig(3,6,9);
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3]){
        winnerConfig(3,5,7);
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
        winner()
    }

    // check if it's O turn and the square is empty
    else if(turn === "o" && !(square.textContent)){

        // change text content to "O"
        square.textContent = "O";
        // move turn to "X"
        turn = "x";
        title.innerHTML = "X TURN"
        winner()
    }

}

