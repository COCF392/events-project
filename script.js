// defining vars
const aquaButton = document.getElementById("aqua");
const tealButton = document.getElementById("teal");
const pinkButton = document.getElementById("pink");
const purpleButton = document.getElementById("purple");
const colorlessButton = document.getElementById("colorless");
const toggleButton = document.getElementById("toggle");
const randomButton = document.getElementById("random")
const box = document.getElementById("color-display");

// these veriable are for the hide and random buttons
let hidden = false;
let boxStateIndex;
let boxState = ["aqua", "teal", "pink", "purple", ["white", "colorless"]]

// functions
function aquaBox() {
    if (!hidden) {
        box.style.backgroundColor = boxState[0]
        box.innerText = boxState[0]
        boxStateIndex = 0
    }
}

function tealBox() {
    if (!hidden) {
        box.style.backgroundColor = boxState[1]
        box.innerText = boxState[1]
        boxStateIndex = 1
    }
}

function pinkBox() {
    if (!hidden) {
        box.style.backgroundColor = boxState[2]
        box.innerText = boxState[2]
        boxStateIndex = 2
    }
}

function purpleBox() {
    if (!hidden) {
        box.style.backgroundColor = boxState[3]
        box.innerText = boxState[3]
        boxStateIndex = 3
    }
}

function colorlessBox() {
    if (!hidden) {
        box.style.backgroundColor = boxState[4][0]
        box.innerText = boxState[4][1]
        boxStateIndex = 4
    }
}

function toggleBox() {
    if (!hidden) {
        box.style.border = "3px solid white"
        box.style.backgroundColor = "white"
        box.innerText = ""
        toggleButton.innerText = "show"
        hidden = true
    }

    else {
        box.style.border = "3px solid black"
        box.style.backgroundColor = boxState[boxStateIndex]
        if (boxStateIndex == 4) {box.innerText = boxState[4][1]}
        else {box.innerText = boxState[boxStateIndex]}
        toggleButton.innerText = "hide"
        hidden = false
    }
}

function randomizeBox() {
    if (!hidden) {
        boxStateIndex = Math.floor(Math.random() * 5)
        if (boxStateIndex == 4) {
            box.style.backgroundColor = boxState[boxStateIndex][0]
            box.innerText = boxState[boxStateIndex][1]
        }
        else {
            box.style.backgroundColor = boxState[boxStateIndex]
            box.innerText = boxState[boxStateIndex]
        }
    }
}

// button events
aquaButton.addEventListener("click", aquaBox);
tealButton.addEventListener("click", tealBox);
pinkButton.addEventListener("click", pinkBox);
purpleButton.addEventListener("click", purpleBox);
colorlessButton.addEventListener("click", colorlessBox);
toggleButton.addEventListener("click", toggleBox);
randomButton.addEventListener("click", randomizeBox);