let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContain = document.querySelector(".hide");

let winTurnO = true;
let count = 0;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    winTurnO = true;
    count = 0;
    enableBoxes();
    msgContain.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("button was clciked")
        if(winTurnO) {
            box.innerText = "O";
            box.style.color = "red"
            winTurnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "green";
            winTurnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    })
});

const gameDraw = () => {
    msg.innerText = "Game was Draw";
    msgContain.classList.remove("hide");
    disabledBoxes();
}



const disabledBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`
    msg.style.fontSize = "8vmin";
    msg.style.color = "#FB29FC";
    msgContain.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern);
        // console.log(pattern[0], pattern[1], pattern[2])
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);