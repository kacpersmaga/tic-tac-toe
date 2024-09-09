const gameBoard = (() => {
    let board = Array(9).fill('');

    const move = (index, figure) => {
        if (board[index] === '') {
            board[index] = figure;
            return true;
        }
        return false;
    };

    const showBoard = () => {
        console.log(board.slice(0, 3).join(' | '));
        console.log('---------');
        console.log(board.slice(3, 6).join(' | '));
        console.log('---------');
        console.log(board.slice(6).join(' | '));
    };

    const getBoard = () => board;

    const resetBoard = () => {
        board.fill('');
        document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    };

    return { move, showBoard, getBoard, resetBoard };
})();

const player = (figure) => ({ figure });

const gameController = (() => {
    const player1 = player('x');
    const player2 = player('o');
    let activePlayer = player1;
    let gameStatus = 1; // 1: in progress, 0: game over

    const playRound = (index) => {
        const infoText = document.querySelector('p');
        if (gameStatus === 1) {
            if (gameBoard.move(index, activePlayer.figure)) {
                document.getElementById(index).textContent = activePlayer.figure;
                gameBoard.showBoard();

                if (checkWinner()) {
                    infoText.textContent = `Player ${activePlayer.figure} wins!`;
                    gameStatus = 0;
                    displayRestartButton();
                } else if (checkDraw()) {
                    infoText.textContent = "It's a draw!";
                    gameStatus = 0;
                    displayRestartButton();
                } else {
                    activePlayer = (activePlayer === player1) ? player2 : player1;
                    infoText.textContent = `Player ${activePlayer.figure}'s turn`;
                }
            } else {
                console.log('Spot already taken');
            }
        } else {
            console.log('Game over. Please restart.');
        }
    };

    const checkWinner = () => {
        const board = gameBoard.getBoard();
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (const [a, b, c] of winCombos) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                document.getElementById(a).classList.add('winning-cell');
                document.getElementById(b).classList.add('winning-cell');
                document.getElementById(c).classList.add('winning-cell');
                return true;
            }
        }
        return false;
    };

    const checkDraw = () => gameBoard.getBoard().every(cell => cell !== '');

    const restartGame = () => {
        gameStatus = 1;
        activePlayer = player1;
        document.querySelector('p').textContent = `Player ${activePlayer.figure}'s turn`;
        gameBoard.resetBoard();
        document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('winning-cell'));
        gameBoard.showBoard();
    };

    const displayRestartButton = () => {
        const main = document.querySelector('main');
        const button = document.createElement('button');
        button.textContent = 'Restart Game';
        button.addEventListener('click', () => {
            restartGame();
            main.removeChild(button);
        });
        main.appendChild(button);
    };

    const showGame = () => {
        document.querySelector('.intro').classList.replace('fadeIn', 'fadeOut');
        document.querySelector('main').classList.replace('fadeOut', 'fadeIn');
    };

    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', () => {
            const index = parseInt(cell.id, 10);
            playRound(index);
        });
    });

    document.querySelector('.intro button').addEventListener('click', showGame);

    return { playRound, restartGame };
})();
