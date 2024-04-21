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