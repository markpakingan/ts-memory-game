const gameboard = document.querySelector("#gameboard");

const boardLength = 5; 
const boardWidth = 4; 
const tiles = boardLength * boardWidth ;
const div = document.querySelector("div")

const colors = ["red", "orange", "yellow", "green", "blue", "violet", 
"black", "pink", "purple", "aquamarine"];

const colorPairs = [...colors, ...colors];

let clickedDiv1 : HTMLElement | null = null;
let clickedDiv2 : HTMLElement | null = null;


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
    }
}


const showColor = (e : MouseEvent) => {

    const clickedDiv = e.target as HTMLElement;
    const clickedId = clickedDiv.id;
    const squareStyle = clickedDiv.style;


    squareStyle.backgroundColor = clickedId.split("-")[0];
    
    console.log(`You clicked ${clickedId.split("-")[0]}`);


    if(!clickedDiv1){
        clickedDiv1 = clickedDiv;
    } else {
        clickedDiv2 = clickedDiv;
        compareDiv(clickedDiv1, clickedDiv2);
    }
}

div?.addEventListener("click", showColor);


const compareDiv = (div1: HTMLElement, div2: HTMLElement) => {

    let color1 = div1.style.backgroundColor || "";
    let color2 = div2.style.backgroundColor || "";


    if(color1 === color2){

        console.log("colors matched!");

        clickedDiv1 = null;
        clickedDiv2 = null;

    } else {
        console.log("try again!");

        setTimeout(()=> {
            div1.style.backgroundColor = "";
            div2.style.backgroundColor = "";

            clickedDiv1 = null;
            clickedDiv2 = null;

        }, 1000)
    }

}



createGameBoard();
