const choices = ['rock', 'paper', 'scissors'];

function game(){
    for (let i = 0; i <= 4; i++)
    playRound();
};

function playRound(){
    const playerSelection= playerChoice();
    const comp = compChoice();
    const winner = checkWinner(playerSelection,comp)
    console.log(winner)

};

function playerChoice () {
    let input = prompt('Choose either rock, paper or scissors.');
    while (input == null){
        input = prompt('Choose either rock, paper or scissors.');

    }


    input = input.toLowerCase();

    let check = validateInput(input);
     while(check == false){
        input = prompt('Choose either rock, paper or scissors. Spelling needs to be exact.');

        while (input == null){
            input = prompt('Choose either rock, paper or scissors. Spelling needs to be exact.');
    
        };
        input = input.toLowerCase();
        check = validateInput(input);

        
     }

     return input;

    

    
     }

function compChoice(){
    return choices[Math.floor(Math.random()*3)];
};

function validateInput(choice){
    if (choices.includes(choice)){
        return true;
    }
    else{
        return false;
    }
}

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
game()