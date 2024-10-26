const board = document.getElementById('board');
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const createCell = (index) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.addEventListener('click', () => handleClick(index));
    board.appendChild(cell);
};

const handleClick = (index) => {
    if (gameState[index] === '') {
        gameState[index] = currentPlayer;
        renderBoard();
        if (checkWinner()) {
            alert(`${currentPlayer} მოიგო!`);
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
};

const renderBoard = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = gameState[index];
    });
};

const checkWinner = () => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winningCombinations.some(combination => {
        return combination.every(index => gameState[index] === currentPlayer);
    });
};

const resetGame = () => {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    renderBoard();
};


for (let i = 0; i < 9; i++) {
    createCell(i);
}

const renderBoard1 = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = gameState[index];
        cell.className = 'cell'; 
        if (gameState[index] === 'X') {
            cell.classList.add('X'); 
        } else if (gameState[index] === 'O') {
            cell.classList.add('O'); ა
        }
    });
};
