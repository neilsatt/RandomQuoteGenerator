// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// select a random quote object from the quotes array and return the randomly selected quote object
function getRandomQuote(){
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote); // sanity check
    return randomQuote;
}

// Create a function to change the background color when the button is clicked
function changeBackgroundColor(color) {
   document.body.style.background = color;
}

// Create an array of colors
var colors = [
    'blue',
    'green',
    'teal',
    'grey',
    'purple'
]

// Use the color array above and create a random color
function pickRandomColor(color){
    randomColor = colors[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote);
    return randomColor;
    
}


// Function to print out properties from the quotes object - added the writer's life dates to the object since quote date wasn't available
function printQuote(){
        var randomQuote = getRandomQuote(); // call function and store the returned quote object in a variable
        var totalHTML = '';
        totalHTML += "<p class='quote' >"+ randomQuote.quote + "</p>";
        totalHTML += "<p class='source'> "+ randomQuote.source;
        totalHTML += "<span class='years'> "+ randomQuote.year + "</p>";
        document.getElementById('quote-box').innerHTML = totalHTML;
    
        // change background color
        var newColor = pickRandomColor();
        changeBackgroundColor(newColor);
}



