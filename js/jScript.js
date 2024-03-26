/*----- constants -----*/
const PLAYER_COLORS = {
    'null': 'white',
    '1': 'crimson',
    '-1': 'aqua',
};
const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4 ,8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

/*----- state variables -----*/
let board; // array containing each tile
let turn; // current player turn
let winner; // variable holding current game status (null: in progress)

/*----- cached elements  -----*/
const msgEl = document.getElementById('sub-header');
const resetBtn = document.getElementById('restart');
const gridSqrs = [ ...document.querySelectorAll('#game-board > div')];
const gridLetters = [ ...document.querySelectorAll('#game-board > div > p')];

/*----- event listeners -----*/
resetBtn.addEventListener('click', init);
document.querySelector('#game-board').addEventListener('click', handleClick);

/*----- functions -----*/
init();


function init() {
            // 1     2    3     4     5     6     7     8      9    cell numbers
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1; // P1 starts
    winner = null; //game in progress
    render();
};


function render() {
    renderBoard();
    renderMessage();
    renderControls();
};

function renderBoard() {
    gridSqrs.forEach(function(sqrNum, sqrIdx) {
        sqrNum.setAttribute('id', `cell0${sqrIdx}`);
        const clickedSqr = document.getElementById(`cell0${sqrIdx}`);
        clickedSqr.style.backgroundColor = PLAYER_COLORS[board[sqrIdx]];
    });
};

function renderMessage() {
    if (winner === 'T') {
        msgEl.innerText = 'Out of moves, it\'s a tie!'
    } else if (winner) {
        msgEl.innerHTML = `<span style="color: ${PLAYER_COLORS[winner]}">${PLAYER_COLORS[winner].toUpperCase()}</span> wins!`
    } else {
        msgEl.innerHTML = `<span style="color: ${PLAYER_COLORS[turn]}">${PLAYER_COLORS[turn].toUpperCase()}</span> pick a square.`
    };
};

function renderControls() {
    if (winner || winner === 'T') {
        resetBtn.style.visibility = 'visible';
    } else {
        resetBtn.style.visibility = 'hidden'
    };
};

function handleClick(evt) {
    // console.log(boardIdx);
    const boardIdx = gridSqrs.indexOf(evt.target);
    if (board[boardIdx] !== null || winner || boardIdx === -1) {
        return;
    };
    board[boardIdx] = turn;
    winner = getWinner();
    turn *= -1;
    render();
};

function getWinner() {
    for (let comboArr of winningCombos) {
        if (Math.abs(board[comboArr[0]] + board[comboArr[1]] + board[comboArr[2]]) === 3) {
            // console.log('win')
            return turn;
        };
        if (!board.includes(null) && winner) {
            // console.log('tie')
            return 'T';
        };
        // console.log('nothing')
    };
};