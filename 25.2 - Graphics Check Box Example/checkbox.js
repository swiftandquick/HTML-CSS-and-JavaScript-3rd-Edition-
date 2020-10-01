function graphicBox(box) {
    // Be unobtrusive.  
    if (!document.getElementById) {
        return;
    }

    /* Find the object and its parent.  If box = check2, 
    then obj will locate and store element with ID check2.  */
    obj = document.getElementById(box);
    parentobj = obj.parentNode;

    // Hide the regular checkbox.  
    obj.style.display = "none";

    /* Create the image element and set its onclick event.  
    Click on the element will invoke Toggle() function.  */
    img = document.createElement("img");
    img.addEventListener("click", Toggle);
    img.src = "images/unchecked.bmp";

    // Save the checkbox ID within the image ID.  
    img.id = "img" + box;

    // Display the graphic checkbox.  
    parentobj.insertBefore(img, obj);
}

function Toggle(e) {
    if (!e) { 
        var e = window.event;
    }

    // Find the image ID.  
    img = (e.target) ? e.target : e.srcElement;

    // Find the checkbox by remoiving "img" from the image ID.  
    checkid = img.id.substring(3);
    checkbox = document.getElementById(checkid);

    // "click" the checkbox.  
    checkbox.click();

    // Display the right image for the clicked or unclicked state.  
    if (checkbox.checked) {
        file = "images/checked.bmp";
    }
    else {
        file = "images/unchecked.bmp";
    }

    img.src = file;
}

graphicBox("check2");
graphicBox("check3");
graphicBox("check4");
graphicBox("check5");