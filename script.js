const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const lizardButton = document.getElementById('lizard');
const spockButton = document.getElementById('spock');
const userChoiceText = document.getElementById('user-choice-text');
const computerChoiceText = document.getElementById('computer-choice-text');
const gameResultText = document.getElementById('game-result-text');
const restartButton = document.getElementById('restart-button');

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));
lizardButton.addEventListener('click', () => playGame('lizard'));
spockButton.addEventListener('click', () => playGame('spock'));

function getComputerChoice(){
    const choices = ['rock','paper','scissors','lizard','spock']
    const randomNumber = Math.floor(Math.random()*5);
    return choices[randomNumber];
}
function determineWinner(userChoice, computerChoice){
    if (userChoice===computerChoice){
        return 'Tie'
    }else if(
        (userChoice === 'rock' && (computerChoice === 'lizard' || computerChoice === 'scissors')) ||
        (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (userChoice === 'lizard' && (computerChoice=== 'paper' || computerChoice === 'spock')) ||
        (userChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
    ){
        return 'You Win'
    }else{
        return 'Computer Wins'
    }
}
function playGame(userChoice){
    const computerChoice =getComputerChoice();
    userChoice.textContent = userChoice;
    computerChoice.textContent = computerChoice;
    const result = determineWinner(userChoice, computerChoice);
    gameResultText.textContent= result;
    updateScore(result);
}