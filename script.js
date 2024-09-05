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

    function playRound(index){
        if(gameStatus === 1){
            const figure = activePlayer.figure;

            if(gameBoard.move(index, figure)){
                console.log(`Player ${figure} placed ${figure} on index ${index}`);
                gameBoard.showBoard();

                if(checkWinner())
                    console.log(`Player ${figure} wins!`);
                else {
                    changeActivePlayer();
                }
            } else {
                console.log('Spot already taken');
            }
        } else {
            console.log('You have to reset the game');
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

    function restartGame(){
        gameStatus = 1;
        activePlayer = player1;
        gameBoard.boardReset();
        console.log('Game has been reset!');
        gameBoard.showBoard();
    }

    return {
        playRound,
        restartGame
    };
})()