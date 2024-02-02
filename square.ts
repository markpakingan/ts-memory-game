const gameboard = document.querySelector("#gameboard");

const boardLength = 5; 
const boardWidth = 4; 
const tiles = boardLength * boardWidth ;


const colors = ["red", "orange", "yellow", "green", "blue", "violet", 
"black", "pink", "purple", "aquamarine"];

const colorPairs = [...colors, ...colors];

const shuffledArray = (array: []) => {
    for(let i = array.length - 1; i > 0; i-- ){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const shuffledColors = shuffledArray(colorPairs : [])

const createGameBoard = () => {
    for (let i = 0; i < tiles; i++){

        let pickedColor = shuffledColors[i];

        const square = document.createElement("div");
        const squareId = `square-${pickedColor}`


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


