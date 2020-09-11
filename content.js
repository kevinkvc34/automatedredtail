


var listOfContacts = [];
for(var l = 0;l < document.getElementsByClassName("contact-list-item").length; l++) {//this is the list of the parent  html element of where the name/input checkbox is contained.
    listOfContacts.push(document.getElementsByClassName("contact-list-item")[l]);//pushing it into local array.
}



var namesToSearch = prompt("Please enter your contact names seperated by a '&&&'.");//they enter a list of names 
namesToSearch.split("&&&"); //self explanatory.

function checkName(name) {//main function
    var i = 0;
    while(i < 1115) {//this is where the bad stuff happens.
        console.log("i is " + i);
        console.log("------------" + listOfContacts[i]);
        if(listOfContacts[i].children[5].textContent.trim() == name) { //checking if the name is == the function param
            var oldHtml = listOfContacts[i].children[0].innerHTML;//grabbing the html for checkbox
            var newHTML = oldHtml.replace(">", " checked>"); //making it checked
            listOfContacts[i].children[0].innerHTML = newHTML;//changing the html
            i = i+1;
        } else {
            i = i+1;
        }
    }
}

for(var i = 0;i<namesToSearch.length;i++) {
    checkName(namesToSearch[i]);//filling in paramater of function
}

console.log("im finished!");//:D
