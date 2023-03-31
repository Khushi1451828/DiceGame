let click=new Audio("/click.mp3");
run=()=>{
    click.play(); 
let randomNumber1 = Math.trunc(Math.random()*6+1);
let play1 = `/imgs/dice${randomNumber1}.png`;

document.getElementById("roll-1").setAttribute('src',play1);

let  randomNumber2= Math.trunc(Math.random()*6+1);
let play2 =`/imgs/dice${randomNumber2}.png`;

document.getElementById("roll-2").setAttribute('src',play2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="😎 player 1 won 😎";
    
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="😛 player 2 won 😛";
}
else{
    document.querySelector("h1").innerHTML="oops! 😥 ROLL AGAIN";
}
}