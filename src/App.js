import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea value={text} onChange={handleChange} className="textArea" />
        <p>Word Count: {text.split(' ').filter((n) => n !== '').length}</p>
      </div>
    </div>
  );
}

export default App;
