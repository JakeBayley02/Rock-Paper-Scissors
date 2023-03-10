let winners = [];
const choices = ['rock', 'paper', 'scissors'];

function resetGame(){
    winners = [];
    document.querySelector('#player').textContent = '';
    document.querySelector('#computer').textContent = '';
    document.querySelector('#ties').textContent = '';
    document.querySelector('#winner').textContent = '';
    
}

function game(){
    imgs.forEach((img) => 
   img.addEventListener('click', () =>
   playRound(img.id))
);

};

const body = document.querySelector('body');
const imgs = document.querySelectorAll('img');
const results = document.querySelector('#results');



function playRound(playerSelection){
    let wins = checkWins();
    if (wins >= 5){
        return;
    };

    const comp = compChoice();
    const winner = checkWinner(playerSelection,comp)

    winners.push(winner);
    
    tallyWins();
    wins = checkWins();
    if (wins == 5){
        endGame();
    };
    
};

function endGame(){
    document.querySelector('#player').textContent = '';
    document.querySelector('#computer').textContent = '';
    document.querySelector('#ties').textContent = '';
    computerWins = winners.filter((item) => item == 'Computer wins').length;
    if (computerWins === 5){
        document.querySelector('#winner').textContent = 'Unlucky, the computer wins the game!';
    }

    else{
        document.querySelector('#winner').textContent = 'Congrats! You won the game!';

    };
    document.querySelector('.Restart').style.display = 'flex';
}

function compChoice(){
    return choices[Math.floor(Math.random()*3)];
};

function checkWinner(ChoiceP,ChoiceC){
    if (ChoiceC === ChoiceP){
        return 'Tie';

    }
    else if ((ChoiceC === 'rock') && (ChoiceP === 'scissors') || ((ChoiceC === 'scissors') && (ChoiceP === 'paper')) || ((ChoiceC === 'paper') && (ChoiceP === 'rock'))){
        return'Computer wins';

    }
    else{
        return'Player wins';
    };
};

function checkWins(){
    const cWins = winners.filter((item) => item == 'Computer wins').length;
    const pWins = winners.filter((item) => item == 'Player wins').length;
    return Math.max(cWins,pWins);
};


function tallyWins(){
    const cTallyWins = winners.filter((item) => item == 'Computer wins').length;
    const pTallyWins = winners.filter((item) => item == 'Player wins').length;
    const tallyTies = winners.filter((item) => item == 'Tie').length;
    document.querySelector('#player').textContent = `Player wins: ${pTallyWins}`;
    document.querySelector('#computer').textContent = `Computer wins: ${cTallyWins}`;
    document.querySelector('#ties').textContent = `Ties: ${tallyTies}`;

};


game();