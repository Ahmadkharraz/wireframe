var yourName = prompt ('please enter your name ', 'Ahmad') //always the output is a string



if(     yourName != '' && yourName != null ) 
{ alert('Welcome' +' '+ yourName) }


function exploreAction () {
    var txt;
    var r = confirm("Are you sure?");
    if (r == true) {
        window.open ("https://www.udemy.com/courses/business/?search-query=business", '_blank');
    } 
    else {    txt = "You pressed Cancel!";    }
    }
document.getElementById("exploreButton").onclick = function() {exploreAction()};

console.log(yourName)