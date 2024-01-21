const update = document.getElementById("newQuote");
const Tweet = document.getElementById("Tweet");
const author = document.getElementById("author");
const quote = document.getElementById("quote");
const api_url = "https://api.quotable.io/quotes/random"

async function getquote(url) {
    const respons = await fetch(url);
    var responseData = await respons.json();
    console.log(responseData);
    author.innerHTML = responseData[0].author;
    quote.innerHTML = responseData[0].content;
};
getquote(api_url);
// update.addEventListener("click", getquote(api_url));

Tweet.addEventListener("click",
    function tweet() {
        window.open("http://twitter.com/intent/tweet?text= " + quote.innerHTML + "-----by" + author.innerHTML, "Tweet window", "width=600,height=300");
    }
)