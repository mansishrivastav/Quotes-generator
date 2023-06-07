const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.length);
            let randomQuote = data[randomIndex].text;
            quote.textContent = randomQuote;
        });
}

btn.addEventListener('click', getQuotes);
getQuotes();
