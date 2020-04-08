import React from 'react';
import './App.css';
import Joke from './Joke';

function App() {
  return (
    <div>
      <h1>Jokes!!!! LMAO</h1>
      <Joke
        question="What's the best thing about Switzerland?"
        answer="I don't know, but the flag is a big plus."
      />
      <Joke question="I invented a new word!" answer="Plagiarism!" />
      <Joke
        question="Did you hear about the mathematician who's afraid of negative numbers?"
        answer="He'll stop at nothing to avoid them."
      />
      <Joke answer="There is no question." />
      <Joke
        question="Helvetica and Times New Roman walk into a bar."
        answer="'Get out of here!' shouts the bartender. 'We don't serve your type.'"
      />
    </div>
  );
}

export default App;
