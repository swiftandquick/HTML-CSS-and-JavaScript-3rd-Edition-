/* #square's initial coordinate.  */
var x = 100; 
var y = 150;

/* dx and dy can be 1, -1, or 0.  */
function pos(dx, dy) {
    if (!document.getElementById) {
        return;
    }
    /* Original:  */
    /* Calculate the new top and left values by adding or subtracting 
    30 since dx and dy can only be 1, -1, or 0.  */
    // x += 30 * dx;
    // y += 30 * dy;
    /* Exercise Problem #2:  */
    x += dx;
    y += dy;
    /* Change #square's position by 30 pixels to position of north, 
    south, west, or east.  */
    obj = document.getElementById("square");
    obj.style.top = y + "px";
    obj.style.left= x + "px";
}

function hideSquare() {
    if (!document.getElementById) {
        return;
    }
    /* Hides the #square.  */
    obj = document.getElementById("square");
    obj.style.display = "none";
}

function showSquare() {
    if (!document.getElementById) {
        return;
    }
    /* Shows the #square in block.  */
    obj = document.getElementById("square");
    obj.style.display = "block";
}