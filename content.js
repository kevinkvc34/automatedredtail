
var missCount = 0;
var misses = [];
var dictOfContacts = {};
for(var l = 0;l < document.getElementsByClassName("contact-list-item").length; l++) {//this is the list of the parent  html element of where the name/input checkbox is contained.
    var name2 = document.getElementsByClassName("contact-list-item")[l].children[5].textContent.trim()
    console.log("name = " + name2);
    dictOfContacts[name2] = document.getElementsByClassName("contact-list-item")[l];
    console.log("dict[name2] = " + dictOfContacts[name2]);
}

var namesToSearch = [];
var tempName = prompt("Please enter your contact names seperated by a '&&&'.");//they enter a list of names 
namesToSearch = tempName.split("&&&"); //self explanatory.

function checkName(name) {//main function
    console.log(name);
    if(name in dictOfContacts) { //checking if the name is a key in teh dictionary
        console.log("HIT");
        var oldHtml = dictOfContacts[name].children[0].innerHTML;//grabbing the html for checkbox
        var newHTML = oldHtml.replace(">", " checked>"); //making it checked
        dictOfContacts[name].children[0].innerHTML = newHTML;//changing the html
    } else {
        missCount = missCount + 1;
        console.log("MISS");
    }
}

for(var i = 0;i<namesToSearch.length;i++) {
    checkName(namesToSearch[i]);//filling in paramater of function
}

console.log(misses);
console.log("im finished!");//:D