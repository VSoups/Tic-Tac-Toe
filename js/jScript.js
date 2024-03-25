/*----- constants -----*/
const PLAYER_COLORS = {
    'null': 'white',
    '1': 'green',
    '-1': 'pink',
};

/*----- state variables -----*/
let board; // array containing each tile
let turn; // current player turn
let winner; // variable holding current game status (null: in progress)

/*----- cached elements  -----*/
const msgEl = document.getElementById('sub-header');
const resetBtn = document.getElementById('restart');
const gridSqrs = [ ...document.querySelectorAll('#game-board > div')];

/*----- event listeners -----*/
resetBtn.addEventListener('click', init);
document.querySelector('#game-board').addEventListener('click', handleClick);

/*----- functions -----*/
init();


function init() {
            // 1     2    3     4     5     6     7     8      9    cell numbers
    board = [null, null, null, null, null, null, null, null, null];
    turn = '1'; // P1 starts
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
}

function renderMessage() {
    if (winner === 'T') {
        msgEl.innerText = 'Out of moves, it\'s a tie!'
    } else if (winner === turn) {
        msgEl.innerHTML = `<span style="color: ${PLAYER_COLORS[winner]}">${PLAYER_COLORS[winner].toUpperCase()}</span> wins!`
    } else {
        msgEl.innerHTML = `It's <span style="color: ${PLAYER_COLORS[turn]}">${PLAYER_COLORS[turn].toUpperCase()}</span>'s turn.`
    }
}

function renderControls() {
    if (winner == true) {
        resetBtn.style.visibility = 'visible';
    } else {
        resetBtn.style.visibility = 'hidden'
    };
    // board.forEach(function(cellNum) { // remove highlight color after square has been clicked
    //     if (cellNum === true) {
    //         document.getElementById(``)
    //     }
    // });
}

function handleClick(evt) {
    // console.log(boardIdx);
    const boardIdx = gridSqrs.indexOf(evt.target)
    if (board[boardIdx] !== null) {
        return;
    }
    winner = getWinner(boardIdx);
    board[boardIdx] = turn;
    turn *= -1;
    render();
};

function getWinner(boardIdx) {
    
}