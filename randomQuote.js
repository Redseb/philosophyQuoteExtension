var image = document.getElementById("image");
var quote = document.getElementById("quote");
var clock = document.getElementById("clock");
clock.addEventListener("click", toggleDarkMode, false);
var background = document.getElementById("background"); //Used for darkMode toggling

/* 
    List of quotes as a two dimensional array. 
    QuoteList[STRING quote][STRING image file path]
*/
var quoteList =
    [
        ["<i>“The unexamined life is not worth living”</i> – Socrates", "socrates2.png"],
        ["<i>“I think therefore I am”</i> – René Descartes", "descartes1.png"],
        ["<i>“The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short”</i> – Thomas Hobbes", "hobbes1.jpg"],
        ["<i>“We live in the best of all possible worlds”</i> – Gottfried Wilhelm Leibniz", "leibniz1.jpg"],
        ["<i>“God is dead! He remains dead! And we have killed him.”</i> – Friedrich Nietzsche", "nietzsche1.png"],
        ["<i>“One cannot step twice in the same river”</i> – Heraclitus", "heraclitus1.jpg"],
        ["<i>“No man's knowledge here can go beyond his experience”</i> – John Locke", "locke1.png"],
        ["<i>“God is not willing to do everything, and thus take away our free will and that share of glory which belongs to us”</i> – Niccolo Machiavelli", "machiavelli1.jpg"],
        ["<i>“There is only one good, knowledge, and one evil, ignorance”</i> – Socrates", "socrates2.png"],
        ["<i>“One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another”</i> – René Descartes", "descartes1.png"],
        ["<i>“Leisure is the mother of philosophy”</i> – Thomas Hobbes", "hobbes1.jpg"],
        ["<i>“We are what we repeatedly do. Excellence, then, is not an act, but a habit”</i> – Aristotle", "aristotle1.png"],
        ["<i>“The mind is furnished with ideas by experience alone” – John Locke</i>", "locke1.png"]

        //["<i>",""],



    ];

var randomNumber = Math.floor((Math.random() * quoteList.length)); //Pick a random number between 0 and length of quote list
quote.innerHTML = quoteList[randomNumber][0]; //Set quote text to corresponding quote
image.src = "images/" + quoteList[randomNumber][1]; //Set image source to corresponding image

var darkMode = false; //Controls whether or not new tab is in dark mode
function toggleDarkMode(){
    darkMode = !darkMode;
    if(darkMode){
        background.classList.remove("bg-gray");
        background.classList.add("bg-dark");
    } else {
        background.classList.remove("bg-dark");
        background.classList.add("bg-gray");
    }
}

// Clock Calculations
// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Time calculations for minutes and seconds
    var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result, account for single digit hours and minutes
    if(hours < 10 && minutes < 10){
        clock.innerHTML = "<u>0" + hours + " : 0"+ minutes + "</u>";
    } else if(hours < 10 && minutes > 9){
        clock.innerHTML = "<u>0" + hours + " : "+ minutes + "</u>";
    } else if(hours > 9 && minutes < 10){
        clock.innerHTML = "<u>" + hours + " : 0"+ minutes + "</u>";
    } else {
        clock.innerHTML = "<u>" + hours + " : "+ minutes + "</u>";
    }

}, 1000);


