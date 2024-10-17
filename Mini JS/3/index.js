const quote = [
    "You only live once",
    "Sensitivity is a gift",
    "Progress over perfection",
    "God's purpose is my purpose",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
};