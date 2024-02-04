const gameboard = document.querySelector("#gameboard");

const boardLength = 3; 
const boardWidth = 2; 
const tiles = boardLength * boardWidth ;
const div = document.querySelector("div");
const colors = ["red", "orange", "yellow"];
const colorPairs = [...colors, ...colors];
const startButton = document.querySelector("#start") as HTMLInputElement;

let clickedDiv1 : HTMLElement | null = null;
let clickedDiv2 : HTMLElement | null = null;

let divAll; 

let seconds = 0; 

//creates the gameboard
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


//randomized colors based on colorPairs
const shuffledArray = <T>(array: T[]) => {
    for(let i = array.length - 1; i > 0; i-- ){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const shuffledColors = shuffledArray(colorPairs)


//create a timer
const timerElement = document.querySelector("#timer")!;

const updateTimer = () => {
    seconds++;
    timerElement.textContent = `Time Elapse: ${seconds} seconds`
}


const startGame = () => {
    createGameBoard();
    toggleClass();
    setInterval(updateTimer, 1000);
}


startButton.addEventListener("click", startGame);

const toggleClass = () => {
    const startButton = document.querySelector("#hide-timer") as HTMLInputElement;
    startButton.classList.toggle("#timer")

}



//if click, it will show the color
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

        div1.setAttribute("class", "completed")
        div2.setAttribute("class", "completed")

    } else {
        console.log("try again!");

        setTimeout(()=> {
            div1.style.backgroundColor = "";
            div2.style.backgroundColor = "";

            clickedDiv1 = null;
            clickedDiv2 = null;

        }, 1000)
    }

    matchAllColors();
}

const matchAllColors = () => {

    const divAll = document.querySelectorAll("div")

    for(let div of divAll){
        if(!div.classList.contains("completed")){
            console.log("Still waiting");
        } else {
            alert("You WIN. Thanks for playing!");
        }
    } 


}


