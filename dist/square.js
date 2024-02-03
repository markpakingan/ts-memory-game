"use strict";
const gameboard = document.querySelector("#gameboard");
const boardLength = 3;
const boardWidth = 3;
const tiles = boardLength * boardWidth;
const div = document.querySelector("div");
const divAll = document.querySelectorAll("div");
const colors = ["red", "orange", "yellow"];
// , "green", "blue", "violet", 
// "black", "pink", "purple", "aquamarine"
const colorPairs = [...colors, ...colors];
let clickedDiv1 = null;
let clickedDiv2 = null;
//randomized colors based on colorPairs
const shuffledArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
const shuffledColors = shuffledArray(colorPairs);
const createGameBoard = () => {
    for (let i = 0; i < tiles; i++) {
        let pickedColor = shuffledColors[i];
        const square = document.createElement("div");
        const squareId = pickedColor;
        square.setAttribute("id", `${squareId}-${i}`);
        square.setAttribute("class", "square");
        square.setAttribute("data-index", i.toString());
        gameboard === null || gameboard === void 0 ? void 0 : gameboard.append(square);
    }
};
const showColor = (e) => {
    const clickedDiv = e.target;
    const clickedId = clickedDiv.id;
    const squareStyle = clickedDiv.style;
    squareStyle.backgroundColor = clickedId.split("-")[0];
    console.log(`You clicked ${clickedId.split("-")[0]}`);
    if (!clickedDiv1) {
        clickedDiv1 = clickedDiv;
    }
    else {
        clickedDiv2 = clickedDiv;
        compareDiv(clickedDiv1, clickedDiv2);
    }
};
div === null || div === void 0 ? void 0 : div.addEventListener("click", showColor);
const compareDiv = (div1, div2) => {
    let color1 = div1.style.backgroundColor || "";
    let color2 = div2.style.backgroundColor || "";
    if (color1 === color2) {
        console.log("colors matched!");
        clickedDiv1 = null;
        clickedDiv2 = null;
        div1.setAttribute("class", "completed");
        div2.setAttribute("class", "completed");
    }
    else {
        console.log("try again!");
        setTimeout(() => {
            div1.style.backgroundColor = "";
            div2.style.backgroundColor = "";
            clickedDiv1 = null;
            clickedDiv2 = null;
        }, 1000);
    }
    matchAllColors();
};
const matchAllColors = () => {
    for (let div of divAll) {
        if (!div.classList.contains("completed")) {
            console.log("Still waiting");
            return;
        }
    }
    alert("You WIN. Thanks for playing!");
};
createGameBoard();
