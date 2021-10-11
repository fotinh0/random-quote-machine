import React, {useState} from "react";
import quoteData from "../data";

export default function QuoteBox(){
    const [quote, setQuote] = useState(quoteData[getRandomIndex()])
    
    function getRandomIndex(){ 
    return Math.round(Math.random() * (quoteData.length-1));
    }
    function handleNewQuote(){
    return setQuote(quoteData[getRandomIndex()])
    }

    return (
        <div id="quote-box">
        <p id="text">"{quote.quote}"</p>  
        <h2 id="author">- {quote.author}</h2>
        <div class="actions">
            <button id="new-quote" class="button" onClick={handleNewQuote}>
            New Quote
            </button>
            <a href="https://twitter.com/intent/tweet" id="tweet-quote">
            Tweet
            </a>
        </div>
        </div>
    )
}