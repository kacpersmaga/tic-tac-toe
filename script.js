const gameBoard = (function() {
    let board = ['','','','','','','','',''];

    function move(index, figure){
        if(board[index] === ''){
            board[index] = figure;
            return true;
        }
        else{
            return false;
        }

    }

    function showBoard(){
        console.log(`${board[0]} | ${board[1]} | ${board[2]}`);
        console.log(`---------`);
        console.log(`${board[3]} | ${board[4]} | ${board[5]}`);
        console.log(`---------`);
        console.log(`${board[6]} | ${board[7]} | ${board[8]}`);
    }

    function getBoard(){
        return board;
    }

    function boardReset(){
        board = board.map(index => '');

        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => cell.textContent = '');
    }

    return {
        move,
        showBoard,
        getBoard,
        boardReset
    };

})()

function player(figure){
    return { figure };
}

const gameController = (function() {
    const player1 = player('x');
    const player2 = player('o');
    let activePlayer = player1;
    let gameStatus = 1; // 1: game in progress, 0: game over

    document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', function() {
        const index = parseInt(cell.id); 
        gameController.playRound(index); 
    });
});

function playRound(index){
    let informationText = document.querySelector('p');

    if(gameStatus === 1){
        const figure = activePlayer.figure;

        if(gameBoard.move(index, figure)){
            console.log(`Player ${figure} placed ${figure} on index ${index}`);
            document.getElementById(index).textContent = figure;
            gameBoard.showBoard();

            if(checkWinner()){
                console.log(`Player ${figure} wins!`);
                informationText.textContent = `Player ${figure} wins!`;
                displayRestartButton();
            } else if(checkDraw()) {
                informationText.textContent = 'It\'s a draw!';
                gameStatus = 0;
                displayRestartButton();
            } else {
                changeActivePlayer();
            }
        } else {
            console.log('Spot already taken');
        }
    } else {
        console.log('You have to reset the game');
    }

    if(gameStatus === 1) {
        informationText.textContent = `Player ${activePlayer.figure}'s turn`;
    }
}


    function changeActivePlayer(){
        activePlayer = activePlayer === player1? player2 : player1;
    }

    function checkWinner(){
        const board = gameBoard.getBoard();

        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]
        ];   
    
        for(let combination of winningCombinations){
            const [a,b,c] = combination;

            if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
                gameStatus = 0;
                return true;
            }
        }
        return false;
    }

    function checkDraw(){
        const board = gameBoard.getBoard();
        return board.every(cell => cell !== '');

    }

    function restartGame(){
        gameStatus = 1;
        activePlayer = player1;
        document.querySelector('p').textContent = `Player ${activePlayer.figure}'s turn`;
        gameBoard.boardReset();
        console.log('Game has been reset!');
        gameBoard.showBoard();
    }

    function displayRestartButton(){
        const main = document.querySelector('main');
        const button = document.createElement('button');
        button.textContent = 'Restart Game';
        button.addEventListener('click', function() {
            gameController.restartGame();
            main.removeChild(button);
        });
        main.appendChild(button);
    }

    return {
        playRound,
        restartGame,
    };
})()

