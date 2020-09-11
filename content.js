

var abel = document.getElementsByClassName("contact-list-item")[7].children[5].textContent.trim();

var listOfContacts = [];
for(var l = 0;l < document.getElementsByClassName("contact-list-item").length; l++) {
    listOfContacts.push(document.getElementsByClassName("contact-list-item")[l]);
}



var namesToSearch = prompt("Please enter your contact names seperated by a '&&&'.");
namesToSearch.split("&&&");

function checkName(name) {
    var isGoing = false;
    var i = 0;
    while(i < 1115) {
        console.log("i is " + i);
        console.log("------------" + listOfContacts[i]);
        if(listOfContacts[i].children[5].textContent.trim() == name) {
            isGoing = true;
            var oldHtml = listOfContacts[i].children[0].innerHTML;
            var newHTML = oldHtml.replace(">", " checked>");
            listOfContacts[i].children[0].innerHTML = newHTML;
        } else {
            i = i+1;
        }
    }
}

for(var i = 0;i<namesToSearch.length;i++) {
    checkName(namesToSearch[i]);
}

console.log("im finished!");