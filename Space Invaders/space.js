//board
let blockSize = 30
let rows = 20
let cols = 20
let canvas
let context

//player Speed
let velocityX = 0
let velocityY = 0

//player coordinates
let playerX = blockSize * 9
let playerY = blockSize * 18

//on load create canvas
window.onload = () => {
    canvas = document.getElementById('canvas');
    canvas.height = rows * blockSize
    canvas.width = cols * blockSize
    context = canvas.getContext('2d')
    document.addEventListener('keyup', changeDirection)
    setInterval(update, 1000/10)
}

//update function so everything appears as moving
function update(){
    //window
    context.fillStyle = 'black'
    context.fillRect(0, 0, canvas.height, canvas.width)

    //player
    playerX += velocityX * blockSize
    playerY += velocityY * blockSize
    context.fillStyle = 'blue'
    context.fillRect(playerX, playerY, blockSize, blockSize)
}

//Inputs for direction changes
function changeDirection(e){
    if(e.code === 'ArrowLeft' && playerX > blockSize * 0) {
        playerX -= blockSize;    
    }
        else if(e.code === 'ArrowRight' && playerX < blockSize * 19) {
        playerX += blockSize;
    }
}

