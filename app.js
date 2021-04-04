var yourName = prompt ('please enter your name ', 'Ahmad') //always the output is a string



if(yourName != '' && yourName != null) 
{ alert('Welcome' +' '+ yourName) }


function exploreAction () {
    var r = confirm("Are you sure?");
    if (r == true) {
        window.open ("https://www.udemy.com/courses/business/?search-query=business", '_blank');
    } }
document.getElementById("exploreButton").onclick = function() {exploreAction()};

console.log(yourName)


// for (var x = 0; x < 10; x = x + 2){
//     console.log(x)
// }

// var password = prompt('Enter your password:')
// while (password !== 'Ahmad') {
//     password = prompt('Your password is not correct. Try again.');
// }
var courseTopic = prompt('Select one course: business or IT ?')

while (courseTopic !== 'business' && courseTopic !== 'IT') {
    courseTopic = prompt('Select one course: Business or IT ?')
}

var coursesNumber = prompt('Enter the number of courses you need')

for (y = 0; y < coursesNumber; y++) {

    if (courseTopic === 'IT') {
    document.write("<img src='https://edynamiclearning.com/wp-content/uploads/2019/05/EDL151-Principles-of-IT_1b-1-405x310.jpg'/>")
    }
    else { document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5w1bDAcUuyWqfkNvELFKKNGqp6mwgoOmv4A&usqp=CAU'/>") }
}