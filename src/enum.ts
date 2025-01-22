// here we are created enum
enum Direction{
    up,
    down,
    left,
    right,
}

function doSomething(direction:Direction){
    switch (direction) {
        case Direction.up:
            console.log("up");
            break;
        case Direction.down:
            console.log("down");
            break;
        case Direction.left:
            console.log("left");
            break;
        case Direction.right:
            console.log("right");
            break;
    
        default:
            break;
    }
}
// here we are calling function with enum value
doSomething(Direction.right);
doSomething(Direction.left);
doSomething(Direction.up);
doSomething(Direction.down);