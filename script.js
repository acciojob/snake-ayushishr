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