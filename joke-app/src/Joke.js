import React from 'react';

function Joke(props) {
  return (
    <div className="joke-card">
      <h2 style={{ display: !props.question && 'none' }}>{props.question}</h2>
      <p style={{ color: !props.question && 'red' }}>{props.answer}</p>
    </div>
  );
}

export default Joke;
