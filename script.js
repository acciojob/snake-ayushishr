
//your code here
const snake = document.getElementById("pixel2");
const gameContainer = document.getElementById("gameContainer")
const scoreElement = document.getElementById("score");

let row = 1, column = 1 ;

let foodItemsList = [
    // {
    //     left: 10,
    //     top: 200,
    //     id: foodItems Id
    // }
]

// rows = 40, columns = 40
function eatFood(){
    // if the snake's offset is equal to any one of the foodItem's offsets then update the score and delete that food item
    let snakeTop = (row-1)*10;
    let snakeLeft = (column - 1)*10 ;
    let foodId; 
    for(let i = 0 ; i < foodItemsList.length; i++){
        if(foodItemsList[i].left == snakeLeft && foodItemsList[i].top == snakeTop){
            scoreElement.innerText = parseInt(scoreElement.innerText) + 10 ;
            foodId = foodItemsList[i].id;
        }
    }

    if(!foodId) return ;

    foodItemsList = foodItemsList.filter((food) => {
        return food.id != foodId;
    })

    const capturedFoodItem = document.getElementById(foodId);
    gameContainer.removeChild(capturedFoodItem);

}

function moveSnakeToRight() {
    eatFood();
    let currentLeftOffset = (column - 1) * 10 ;
    snake.style.left = (currentLeftOffset + 10) + "px";
    column++;
    if(column == 41) {
        column = 1 ;
        snake.style.left = 0 + "px" ;
let snakeBody = [{row: 20, col: 1}, {row: 20, col: 2}, {row: 20, col: 3}];
let direction = 'right';
let score = 0;

function updateSnake() {
  let head = snakeBody[snakeBody.length - 1];
  let newHead = {row: head.row, col: head.col};
  if (direction === 'right') {
    newHead.col++;
  } else if (direction === 'left') {
    newHead.col--;
  } else if (direction === 'up') {
    newHead.row--;
  } else if (direction === 'down') {
    newHead.row++;
  }
  if (newHead.row < 1 || newHead.row > 40 || newHead.col < 1 || newHead.col > 40) {
    // Snake collided with the wall
    gameOver();
    return;
  }
  for (let i = 0; i < snakeBody.length; i++) {
    if (newHead.row === snakeBody[i].row && newHead.col === snakeBody[i].col) {
      // Snake collided with itself
      gameOver();
      return;
    }
  }
  snakeBody.push(newHead);
  if (newHead.row === food.row && newHead.col === food.col) {
    // Snake ate the food
    score++;
    generateFood();
  } else {
    snakeBody.shift();
  }
  updateGame();
}

function moveSnakeToLeft() {
    eatFood();
    let currentLeftOffset = (column - 1) * 10 ;
    snake.style.left = (currentLeftOffset - 10) + "px" ;
    column -- ;

    if(column == 0){
        column = 40 ;
        snake.style.left = "390px" ;
    }
}

function moveSnakeToTop() {
    eatFood();
    let currentTopOffset = (row-1)*10;
    snake.style.top = (currentTopOffset - 10) + "px"; 
    row--;

    if(row == 0){
        row = 40 ;
        snake.style.top = "390px" ;
    }
}

function moveSnakeToBottom(){
    eatFood();
    let currentTopOffset = (row-1)*10 ;
    snake.style.top = (currentTopOffset + 10) + "px" ;
    row++;
    if(row == 41){
        row = 1 ;
        snake.style.top = "0px" ;
    }
}


// 20px
// 20 + "px" => 20px
// 20px
let intervalId =  setInterval(moveSnakeToRight, 100)


document.body.addEventListener("keyup", (e) => {
    if(["ArrowRight", "ArrowDown", "ArrowUp", "ArrowLeft"].includes(e.key)){
        clearInterval(intervalId);
    }
    if(e.key === "ArrowRight"){
        intervalId = setInterval(moveSnakeToRight, 100)
    }
    else if(e.key === "ArrowDown"){
        intervalId = setInterval(moveSnakeToBottom, 100);
    }
    else if(e.key === "ArrowUp"){
        intervalId = setInterval(moveSnakeToTop, 100);
    }
    else if(e.key === "ArrowLeft"){
        intervalId = setInterval(moveSnakeToLeft, 100);
    }
})



function generateRandomOffset(){
    // returns a number in [0, 10, 20, 30, 40 ...., 390]
    let number = parseInt(Math.random()*100) ;
    if(number > 40){
        return parseInt(number/ 10)*10;
    }
    return number*10;
}

for(let i = 1 ;i <= 30; i++) {
    const foodItem = document.createElement("div");
    foodItem.className = "food" 
    let id = "pixel"+(3 + i); // pixel4, pixel5, pixel6 ..
    foodItem.id = id ;
    let left = generateRandomOffset();
    let top = generateRandomOffset();
    let foodItemObject = {
        left: left ,
        top: top,
        id: id
    }
    foodItemsList.push(foodItemObject);
    foodItem.style.left = left + "px";
    foodItem.style.top = top + "px";
    gameContainer.append(foodItem);
}
setInterval(updateSnake, 100);
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 37) {
        // Left arrow key pressed
        if (direction !== 'right') {
        direction = 'left';
        }
        } else if (event.keyCode === 38) {
        // Up arrow key pressed
        if (direction !== 'down') {
        direction = 'up';
        }
        } else if (event.keyCode === 39) {
        // Right arrow key pressed
        if (direction !== 'left') {
        direction = 'right';
        }
        } else if (event.keyCode === 40) {
        // Down arrow key pressed
        if (direction !== 'up') {
        direction = 'down';
        }
        }
        });

        let food = {row: 1, col: 1};

        function generateFood() {
        let foodRow = Math.floor(Math.random() * 40) + 1;
        let foodCol = Math.floor(Math.random() * 40) + 1;
        while (isOccupied(foodRow, foodCol)) {
        foodRow = Math.floor(Math.random() * 40) + 1;
        foodCol = Math.floor(Math.random() * 40) + 1;
        }
        food = {row: foodRow, col: foodCol};
        updateGame();
        }

        function isOccupied(row, col) {
        for (let i = 0; i < snakeBody.length; i++) {
        if (row === snakeBody[i].row && col === snakeBody[i].col) {
        return true;
        }
        }
        return false;
        }


        function updateGame() {
        let pixels = document.querySelectorAll('.pixel');
        pixels.forEach(pixel => {
        pixel.classList.remove('snakeBodyPixel');
        pixel.classList.remove('food');
        });
        snakeBody.forEach(bodyPixel => {
        let pixelId = 'pixel' + (bodyPixel.row - 1) * 40 + bodyPixel.col;
        let pixel = document.getElementById(pixelId);
        pixel.classList.add('snakeBodyPixel');
        });
        let foodPixelId = 'pixel' + (food.row - 1) * 40 + food.col;
        let foodPixel = document.getElementById(foodPixelId);
        foodPixel.classList.add('food');
        let scoreBoard = document.querySelector('.scoreBoard');
        scoreBoard.innerHTML = 'Score: ' + score;
        }