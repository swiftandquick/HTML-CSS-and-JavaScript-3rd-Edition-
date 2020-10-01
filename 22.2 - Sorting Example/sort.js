// Initialize the counter and the array.  
var numbernames = 0;
var names = new Array();
function SortNames() {
    // Get the name from the text field.  
    thename = document.theform.newname.value;
    // Add the name to the array.  
    // Exercise Problem #1, convert name to upper case.  
    names[numbernames] = thename.toUpperCase();
    // Increment the counter.  
    numbernames++;
    /* Sort the array in alphabetical order.  Newly added name will be sorted 
    first and will place into the appropriate position in the text area.  */
    names.sort();
    /* The names array's elements join together, each element in the array 
    is separate by a new line.  The result is print in the container with 
    the name "sorted" (textarea).  */
    document.theform.sorted.value = names.join("\n");
}