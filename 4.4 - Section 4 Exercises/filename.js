function showTime() {
    let now = new Date();
    let localtime = now.toString();
    /* demo is the ID of an empty paragraph, innerHTML means the new contents to put inside the empty 
    <p> tag, and the contents here replaces the original empty content.  */ 
    document.getElementById("demo").innerHTML = "<p><strong>Local time:</strong> " + localtime + "</p>";
}