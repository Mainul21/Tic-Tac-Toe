let boxs = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newGamebtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg_container');
let msg = document.querySelector('#msg');

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turnO = true;
    enableboxs();
    msgContainer.classList.add("hide");
}

boxs.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
        checkWinner();
    });
});

const  disableboxs = () =>{
    for(let box of boxs){
        box.disabled = true;
    }
}
const  enableboxs = () =>{
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxs();
};

const checkWinner = () =>{
    for ( let pattern of winPatterns){
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner");
                showWinner(pos1val);
            }
        }
    }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);

