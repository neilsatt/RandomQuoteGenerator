// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// select a random quote object from the quotes array and return the randomly selected quote object
function getRandomQuote(){
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote)
    return randomQuote;
};





function printQuote(){
    //console.log('My random quote: '+randomQuote.quote);
        var randomQuote = getRandomQuote(); // call function and store the returned quote object in a variable
        var totalHTML = '';
        totalHTML += "<p class='quote' >"+ randomQuote.quote + "</p>";
        totalHTML += "<p class='source'> "+ randomQuote.source;
        totalHTML += "<span class='years'> "+ randomQuote.years + "</p>";
        document.getElementById('quote-box').innerHTML = totalHTML;
}



