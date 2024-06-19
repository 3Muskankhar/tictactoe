let boxes= document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");
let msgConatiner = document.querySelector(".msg-container");

let turn0=true;
  const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
  ];

  const resetgame=()=>{
    turn0=true;
    enablebtn();
    msgConatiner.classList.add("hide");
  };
  boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
      if(turn0){
        box.innerText="O";
        turn0=false;
      }
      else{
        box.innerText="X";
        turn0=true;
      }
      box.disabled=true;
      checkWinner();
    });
  });
  const disablebtn =() =>{
    for(let box of boxes){
         box.disabled=true;
        
    }
  };
  const enablebtn =() =>{
    for(let box of boxes){
         box.disabled=false;
         box.innerText="";
    }
  };

  const showwinner = (winner)=>{
msg.innerText=`Conratulations, Winner is ${winner}`;
msgConatiner.classList.remove("hide");
disablebtn();
  };
  const checkWinner=()=>{
    for(let pattern  of winpattern){
        
            let pos1 = boxes[pattern[0]].innerText;
           let pos2 = boxes[pattern[1]].innerText;
           let pos3 = boxes[pattern[2]].innerText;

           if(pos1!= "" && pos2!= "" && pos3!= "" ){
            if(pos1 == pos2 && pos2==pos3){
                showwinner(pos1);
                return true;
            }
           }
    }
  };
  newGamebtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);
