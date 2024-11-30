/*const countvowels=(str)=>{
    let count = 0;
    for(const char of str){
        if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
         count++;    
        }
        console.log(count);
    }*/
   
/*let arr=[45,101,78,90,94];
let toppers= arr.filter((val)=>{
     return val>90;
    });
    console.log(toppers);*/
/*let n =prompt("enter any number");
let arr=[];
for (let i=1; i<=n;i++){
    arr[i-1]=i;
}*/

 /*let sum =arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(sum);*/
/*let factorial=arr.reduce((res,curr)=>{
    return res*curr;
})
console.log(factorial);*/
/*let h2= document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText=h2.innerText+"from apna college";*/
/*let div = document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id);*/
/*let newbtn=document.createElement("button");
newbtn.innerText="click me!";

newbtn.style.color="white";
newbtn.style.backgroundColor="red";

document.querySelector("body").prepend(newbtn);*/
/*let btn1 =document.querySelector("#btn1");
btn1.onclick=() =>{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);*/
 //   let btn1 =document.querySelector("#btn1");
   // btn1.onclick=(evt) =>{
     //   console.log(evt);
       // console.log(evt.type);
        //console.log(evt.target);
//}
 //btn1.addEventListener("click",()=>{
   // console.log("button was clicked");
 //};
//let div =document.querySelector("div");
/* let modebtn=document.querySelector("#mode");

 let body=document.querySelector("body");
 let currMode="light";
 modebtn.addEventListener("click",()=>{
    if(currMode ==="light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
 });*/
 
 let boxes=document.querySelectorAll(".box");
 let resetBtn=document.querySelector("#reset-btn");
 let newGameBtn=document.querySelector("#new-btn");
 let msgContainer=document.querySelector(".msg-container");
 let msg=document.querySelector("#msg");
 let turnO = true;
 let count = 0;
 const winPatterns=[
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],
 ];
const resetGame = () =>{
     turnO = true;
     count = 0;
     enableBoxes();
     msgContainer.classList.add("hide");
};
 boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if (turnO){
        box.innerText="O";
        turnO=false;
    }    else {
          box.innerText="X";
          turnO=true;
    }
    box.disabled= true;
    count++;
    let isWinner=checkWinner();
    if (count===9 && !isWinner){
        gameDraw();
    }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = ()=>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText="";
        }
};
const showWinner= (winner) =>  {
      msg.innerText=`congratulations,winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disableBoxes();
};
 const checkWinner= () => {
    for( let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            
                showWinner(pos1Val);
                return true;
            }
        }
    }
 };
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

