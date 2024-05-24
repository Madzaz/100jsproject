const author = document.querySelector("#author");
const quote = document.querySelector("#quote");
const button = document.querySelector("#btn");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    button.textContent = "Loading...";
    button.disabled = true;
    author.textContent = "Updating...";
    quote.textContent = "Updating...";

    const response = await fetch(apiURL);
    const data = await response.json();

    const newQuote = data.content;
    const newAuthor = data.author;

    quote.textContent = newQuote;
    author.textContent = newAuthor;

    button.textContent = "Get a quote";
    button.disabled = false;
  } catch (error) {
    console.log(error);
    quote.textContent = "An error happened, try again later";
    author.textContent = "";
    button.disabled = true;
  }
}

button.addEventListener("click", getQuote);
