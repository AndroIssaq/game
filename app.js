//function to play the game 

let game=()=>{
let pScore=0;
let cScore=0;
document.querySelector(".player p").textContent=pScore
document.querySelector(".computer p").textContent=cScore
// function to start game
let startGame=()=>{
    let playBtn=document.querySelector(".play")
    let introSec=document.querySelector(".intro")
    let matchSec=document.querySelector(".match")
    playBtn.addEventListener("click",function(){
        introSec.classList.add("fadeout")
        matchSec.classList.add("fadein")
        })
}

// function to Play Match
let playMatch=function(){
let computrOptions=["rock","paper","scissors"]
let options=document.querySelectorAll(".options button")
let playerHand=document.querySelector(".player-hand")
let computerHand=document.querySelector(".computer-hand")
options.forEach(option=>{
    option.addEventListener("click",function(){
        let computerNumper=Math.floor(Math.random()*3)
        let computerChoice=computrOptions[computerNumper]

        // add the animation 
        playerHand.style.animation="playerhandmove 2s ease"
        computerHand.style.animation="computerhandmove 2s ease"
       

        setTimeout(()=>{
        
        // viod the compare function 
        compare(this.textContent,computerChoice)
        // update the img
        playerHand.src=`img/${this.textContent}.png`
        computerHand.src=`img/${computerChoice}.png`
        
        setTimeout(()=>{
             // function to play again
            let playBtn=document.querySelector(".play")
            let introSec=document.querySelector(".intro")
            let matchSec=document.querySelector(".match")
            playBtn.textContent="play again"
            playBtn.addEventListener("click",function(){
                introSec.classList.add("fadein")
                matchSec.classList.add("fadeout")
                })
        },1000)
        },3000)
      
    })
})
}

// function to compare 
let compare=(playerChoice,computerChoice)=>{
    // update the score
    let updateScore=function(){
        document.querySelector(".player p").textContent=pScore
        document.querySelector(".computer p").textContent=cScore
    } 

    
  

    let winner=document.querySelector(".winner")
    // we look for a tie
    if(playerChoice===computerChoice){
        winner.textContent="We Have a Tie";
      
        return;
    }
    // player chiose
    if(playerChoice=="rock"){
        if(computerChoice=="paper"){
            winner.textContent="Computer Wins";
            cScore++
            updateScore()
           
            return;
        }else{
            winner.textContent="Player Wins";
            pScore++
            updateScore()
          
            return;
        }
    }
    if(playerChoice=="paper"){
        if(computerChoice=="scissors"){
            winner.textContent="Computer Wins";
            cScore++
            updateScore()
           
            return;
        }else{
            winner.textContent="Player Wins";
            pScore++
            updateScore()
           
            return;
        }
    }
    if(playerChoice=="scissors"){
        if(computerChoice=="rock"){
            winner.textContent="Computer Wins";
            cScore++
            updateScore()
           
            return;
        }else{
            winner.textContent="Player Wins";
            pScore++
            updateScore()
          
            return;
        }
    }
}
// viod the Functions
    startGame()

    // to play match
    playMatch()

    //playAgain
    
}



game()