/**
 * Random Quote Machine
 * JavaScript File
 * @author Ulysse Valdenaire
 * 16/01/2022
 */

let quote;
let arrayQuote;

const colors = [
    "#B7371B",
    "#ADD52F",
    "#2FD550",
    "#2FD587",
    "#2FD5C7",
    "#2F91D5",
    "#2F46D5",
    "#872FD5",
];

let backgroundColor;

$(document).ready(function() {
    getQuote();
    $("#new-quote").click(displayQuote);
});

/**
 * getQuote
 * get the quotes and displays them
 */
function getQuote() {
    fetch(
            "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        )
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            quote = value.quotes[0].quote;
            arrayQuote = value.quotes;
            displayQuote();
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}

/**
 * getRandomQuote
 * get a random quote from the array quote with a random number
 * @param  {array} quotes
 * @return {string}
 */
function getRandomQuote(quotes) {
    let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteIndex];
}

/**
 * displayQuote
 * displays the quotes in the HTML DOM
 */
function displayQuote() {
    let randomQuote = getRandomQuote(arrayQuote);
    $("#text").text(randomQuote.quote);
    $("#author").text(randomQuote.author);
    backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty("--main-color", backgroundColor);
}