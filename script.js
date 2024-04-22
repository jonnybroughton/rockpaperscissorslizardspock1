/*DOMContentLoaded to make sure everything loads to ensure game plays as expected*/
document.addEventListener("DOMContentLoaded", function() {
    /*define constants and click event listeners*/
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
    /*Computer Choice Function*/
    function getComputerChoice(){
        const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        const randomNumber = Math.floor(Math.random() * 5);
        return choices[randomNumber];
    }
    /*Determine Winner Function*/
    function determineWinner(userChoice, computerChoice){
        if (userChoice === computerChoice){
            return 'Tie';
        } else if (
            (userChoice === 'rock' && (computerChoice === 'lizard' || computerChoice === 'scissors')) ||
            (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
            (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
            (userChoice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
            (userChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
        ){
            return 'You Win';
        } else {
            return 'Computer Wins';
        }
    }
    /*PlayGame function from user choices*/
    function playGame(userChoice){
        const computerChoice = getComputerChoice();
        userChoiceText.textContent = capitalize(userChoice);
    computerChoiceText.textContent = capitalize(computerChoice);
        const result = determineWinner(userChoice, computerChoice);
        gameResultText.textContent = result;
        updateScore(result);
    }
    /*Function to capitalise user choice result*/
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    /*function to enable scoreboard functionality*/
    let userScore = 0;
    let computerScore = 0;

    function updateScore(result){
        const userScoreDisplay = document.getElementById('user-score');
        const computerScoreDisplay = document.getElementById('computer-score');

        if (userScore < 10 && computerScore < 10){
            if(result === 'You Win'){
                userScore++;
            } else if(result === 'Computer Wins'){
                computerScore++;
            }
            userScoreDisplay.textContent = userScore;
            computerScoreDisplay.textContent = computerScore;
            checkOverallWinner();
        }
    }
    /*Function to decide overall winner out of 10 games*/
    function checkOverallWinner(){
        const overallWinnerText = document.getElementById('overall-winner-text');
        if(userScore === 10){
            overallWinnerText.textContent = 'You are the overall winner!';
            restartButton.style.display = 'block';
        } else if(computerScore === 10){
            overallWinnerText.textContent = 'The computer is the overall winner! How about another game?';
            restartButton.style.display = 'block';
        }
    }
    /*Function to allow game to be restarted*/
    function restartGame(){
        userScore = 0;
        computerScore = 0;
        const userScoreDisplay = document.getElementById('user-score');
        const computerScoreDisplay = document.getElementById('computer-score');
        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;
        const overallWinnerText = document.getElementById('overall-winner-text');
        overallWinnerText.textContent = '';  
    }

    restartButton.addEventListener('click', restartGame);
});
