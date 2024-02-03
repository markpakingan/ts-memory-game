const gameboard = document.querySelector("#gameboard");

const boardLength = 5; 
const boardWidth = 4; 
const tiles = boardLength * boardWidth ;
const div = document.querySelector("div")

const colors = ["red", "orange", "yellow", "green", "blue", "violet", 
"black", "pink", "purple", "aquamarine"];

const colorPairs = [...colors, ...colors];


//randomized colors based on colorPairs
const shuffledArray = <T>(array: T[]) => {
    for(let i = array.length - 1; i > 0; i-- ){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const shuffledColors = shuffledArray(colorPairs)

const createGameBoard = () => {
    for (let i = 0; i < tiles; i++){

        let pickedColor = shuffledColors[i];

        const square = document.createElement("div");
        const squareId = pickedColor;


        square.setAttribute("id", `${squareId}-${i}`);
        square.setAttribute("class", "square");

        square.setAttribute("data-index", i.toString());
        gameboard?.append(square);
        // square.addEventListener("click", () => handleClick(squareId))
        
    }
}


const sayHello = (e : MouseEvent) => {
    // const clickedSquare = document.getElementById()!;

    const clickedDiv = e.target as HTMLElement;
    const clickedId = clickedDiv.id;
    const squareStyle = clickedDiv.style;


    squareStyle.backgroundColor = clickedId.split("-")[0];
    console.log(clickedId.split("-")[0]);
}

div?.addEventListener("click", sayHello);
createGameBoard();


