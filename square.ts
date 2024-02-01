const gameboard = document.querySelector("#gameboard");

const boardLength = 5; 
const boardWidth = 4; 
const tiles = boardLength * boardWidth ;


const colors = ["red", "orange", "yellow", "green", "blue", "violet", 
"black", "pink", "purple", "aquamarine"];


const createGameBoard = () => {
    for (let i = 0; i < tiles; i++){
        const square = document.createElement("div");
        const squareId = `square-${i}`
        square.setAttribute("id", squareId);
        square.setAttribute("class", "square");

        square.setAttribute("data-index", i.toString());
        gameboard?.append(square);
        square.addEventListener("click", () => handleClick(squareId))
        
    }
}

const handleClick = (squareId:string) => {
    console.log(`You clicked on ${squareId}`);
}

createGameBoard();


