const choices = ['rock', 'paper', 'scissors'];
/*
function game(){
    for (let i = 0; i <= 4; i++)
    playRound();
};
*/

const imgs = document.querySelectorAll('img');


imgs.forEach((img) => 
   img.addEventListener('click', () =>
   playRound(img.id))
);

function playRound(playerSelection){
    const comp = compChoice();
    const winner = checkWinner(playerSelection,comp)
    console.log(winner, comp, playerSelection)


};

function compChoice(){
    return choices[Math.floor(Math.random()*3)];
};

function checkWinner(ChoiceP,ChoiceC){
    if (ChoiceC === ChoiceP){
        return 'This is a tie!';

    }
    else if ((ChoiceC === 'rock') && (ChoiceP === 'scissors') || ((ChoiceC === 'scissors') && (ChoiceP === 'paper')) || ((ChoiceC === 'paper') && (ChoiceP === 'rock'))){
        return'You lose!';

    }
    else{
        return'You win!';
    };
};
playRound();