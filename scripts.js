const quoteContainer = document.querySelector("#quote-container");
const qouteText = document.querySelector("#quote-text");
const author = document.querySelector("#author");
const newQouteButton = document.querySelector("#new-qoute");
const loader = document.querySelector("#loader");
const tweetButton = document.querySelector("#tweet-button");

const showLoader = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

const removeLoader = () => {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Get Qoutes from API
const getQoutefromAPI = async () => {
    const apiURL = "https://quotes.stormconsultancy.co.uk/random.json";
    try {
        showLoader();
        const response = await fetch(apiURL);
        const data = await response.json();
        author.textContent = '- ' + data["author"];
        qouteText.textContent = data["quote"];
        removeLoader();
    } catch(error) {
        quoteContainer.innerHTML = "Oops Some Error Occured !!";
        console.log(error);
    }
}

const tweetTheQoute = () => {
    const qoute = qouteText.textContent;
    const author = qouteText.author;
    const tweetURL = `https://twitter.com/intent/tweet?text=${qoute + '- ' + author}`;
    window.open(tweetURL, "_blank");
}

// Adding click event to the buttons
newQouteButton.addEventListener("click", getQoutefromAPI);
tweetButton.addEventListener("click", tweetTheQoute);


getQoutefromAPI();
