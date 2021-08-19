import React from "react";
import Button from "react-bootstrap/Button";

import '../styles/style.css';

const Frases = ({ accentColor, handleNewQuote, currentQuote }) => {
  const { quote, author } = currentQuote;
  return (
    <div
      id="quote-box"
      className="quote-box"
      style={{ backgroundColor: "white" }}
    >
      <div className="quote-text">
        <span id="text" className="quote">
          {quote}
        </span>
      </div>
      <div className="quote-author">
        <span id="author">-{author}</span>
      </div>
      <div className="buttons">
        <Button
          id="tweet-quote"
          className="icon quote-btn transition"
          style={{ backgroundColor: `${accentColor}` }}
          href={`https://twitter.com/intent/tweet?text=${quote}-${author}&hashtags=quote`}
        >
          
        </Button>
        <Button
          id="new-quote"
          className="quote-btn transition"
          onClick={() => handleNewQuote()}
          style={{ backgroundColor: `${accentColor}` }}
        >
          New Quote
        </Button>
      </div>
    </div>
  );
};

export default Frases;