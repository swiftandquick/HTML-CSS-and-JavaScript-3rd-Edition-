// Create the new array.  
names = new Array();
var i = 0;

// Loop and prompt for names.  
do {
    /* Prompts a message, asking for input.  Use do while 
    loop so user enters at least one name.  */
    next = window.prompt("Enter the Next Name", "");
    /* If entry isn't blank, set the next array index equal to next (entry).  */
    if (next > " ") {
        names[i] = next;
        i = i + 1;
    }
} while ((next > " ") && (i < 10));
// Do while loop ends if the non-first entry is blank and if 10 names are already entered.  

// Display the number of names entered with .length method.  
document.write("<h2>" + (names.length) + " names entered.  </h2>");

// Sort the names.  
names.sort();

// Use for...in loop to display each name in an ordered list style.  
document.write("<ol>");
for (i in names) {
    document.write("<li>" + names[i] + "</li>");
}
// Close the list.  
document.write("</ol>");