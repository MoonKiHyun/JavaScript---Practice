const quotes = [
    {
        quotes: "Stay hungry, stay foolish you believe in a thing, believe in it all the way, implicitly and unquestionable. - Walt Disney",
        author: "Steve Jobs"
    },
    {
        quotes: "Be yourself; everyone else is already taken",
        author: "Oscar Wilde"
    },
    {
        quotes: "Dream big and dare to fail",
        author: "Norman Vaughan"
    },
    {
        quotes: "Act as if what you do makes a difference. It does",
        author: "William James"
    },
    {
        quotes: "Keep going. Be all in",
        author: "Bryan Hutchinson"
    },
    {
        quotes: "The best is yet to come",
        author: "Frank Sinatra"
    },
    {
        quotes: "Do what you can, with what you have, where you are",
        author: "Theodore Roosevelt"
    },
    {
        quotes: "The only limit to our realization of tomorrow is our doubts of today",
        author: "Franklin D. Roosevelt"
    },
    {
        quotes: "You miss 100% of the shots you don’t take",
        author: "Wayne Gretzky"
    },
    {
        quotes: "Believe you can and you're halfway there",
        author: "Theodore Roosevelt"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;