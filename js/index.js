const newQuoteButton = document.querySelector('#js-new-quote');
const twitterButton = document.querySelector('#js-tweet');

newQuoteButton.addEventListener('click', getQuote)
 
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

async function getQuote(){
  console.log("quote button was clicked")
  try{
    const response = await fetch(endpoint)
    if(!response.ok){
      throw Error(response.statusText)
    }
    const json = await response.json()
    displayQuote(json.message)
    setTweetButton(json.message)

  }

  catch(err){
    console.log(err)
    alert('Failed to fetch new quote')
  }
}


function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote
}

function setTweetButton(quote) {
  twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - App Random Quote-JS`);
}


getQuote();
