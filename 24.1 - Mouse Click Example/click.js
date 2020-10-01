function mousestatus(e) {
    if (!e) e = window.event;
    /* Represents what button is being clicked, left mouse click is 0, 
    middle mouse click is 1, and right mouse click is 2.  */
    btn = e.button;
    switch(btn) {
        case 0:
            whichone = "Left";
            break;
        case 1:
            whichone = "Middle";
            break;
        case 2:
            whichone = "Right";
            break;
        default:
            whichone = "UNKNOWN";
    }
    /* e.type prints out event type.  
    whichone represents what mouse button is clicked.  
    Use <br> to skip a line.  
    */
    message = e.type + ":  " + whichone + "<br>";
    // Appends message in the testarea.  
    document.getElementById('testarea').innerHTML += message;
    /* Tells the user agent that if the event does not get explicitly handled, 
    its default action should not be taken as it normally would be.   */
    e.preventDefault();
}

// Gets the #testlink object, set it equal to obj.  
obj = document.getElementById('testlink');

/* Add event to obj (#testlink), call mousestatus function when there is a 
click, mousedown, mouseup, and dbclick event.  */
obj.addEventListener("click", mousestatus);
obj.addEventListener("mousedown", mousestatus);
obj.addEventListener("mouseup", mousestatus);
obj.addEventListener("dbclick", mousestatus);