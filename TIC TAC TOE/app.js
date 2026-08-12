let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //turn of player O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        count++;
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
        } 
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
    
});

const disableBtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
let winner = "";
const showWinner = () =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
};
const draw = () =>{
    msg.innerText = `DRAW`;
    msgContainer.classList.remove("hide");
    disableBtn(); 
}
const checkWinner = ()=>{
    if(count == 9) draw();
    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                winner = pos1;
                showWinner();
            }
        }
    }
};

const resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);