// Function use to print a card.   
function printCard() {
    var name_line = "<strong>Name:  </strong>" + this.name + "<br>\n"
    var email_line = "<strong>Email:  </strong>" + this.email + "<br>\n"
    var address_line = "<strong>Address:  </strong>" + this.address + "<br>\n"
    var phone_line = "<strong>Phone:  </strong>" + this.phone + "<br>\n"
    // Exercise Problem #2
    var personal_notes_line = "<strong>Personal Notes:  </strong>" + this.personal_notes + "<hr>\n"
    document.write(name_line, email_line, address_line, phone_line, personal_notes_line);
}

/* Constructor, sets variables name, email, address, and phone.  this keyword 
refers to the current object's property.  this.name refers to current object's 
name, this.name = name sets current object's name equal to name in parameter.  */
function Card(name, email, address, phone, personal_notes) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    // Exercise Problem #2
    this.personal_notes = personal_notes;
    /* Make printCard part of the function definition for Card objects.  printCard 
    refers to the printCard.  This new method will work as long as printCard has its 
    own definition elsewhere in the script.  (page 578) */
    this.printCard = printCard;
}

// Create objects and pass arguments to constructors.  
var sue = new Card("Sue Suthers", 
                    "sue@suthers.com", 
                    "123 Elm Street, Yourtown ST 99999", 
                    "555-555-9876", 
                    "I really like Sue.  ");
var fred = new Card("Fred Fanboy", 
                    "fred@fanboy.com", 
                    "233 Oak Lane, Sometown ST 99399", 
                    "555-555-4444", 
                    "Fanboys are gonna fanboy.  ");
var jimbo = new Card("Jimbo Jones", 
                    "jimbo@jones.com", 
                    "233 Walnut Circle, Anotherville ST 88999", 
                    "555-555-1344", 
                    "Jumbo chicken!  ");

// Call the printCard() method to print them.  
sue.printCard();
fred.printCard();
jimbo.printCard();