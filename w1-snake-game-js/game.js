let gameOver = false;
const gameBoard = document.getElementById("game-board");

const main = (currentTime) => {
    if (gameOver){
        alert("Game Over");
        clearInterval(gameLoop);
    }
    update();
    draw();
}

const gameLoop = setInterval(main, 1000/SNAKE_SPEED);

const update = () => {
    updateSnake();
    updateFood();
    gameOver = isGameOver();
}

const draw = () => {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

const isGameOver = () => {
    return snakeOutOfBounds() || snakeIntersectSelf();
}