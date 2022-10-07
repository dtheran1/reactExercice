import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  const [keyword, setKeyWord] = useState('cr7')
  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setKeyWord('messi')}>Cambiar keyword</button>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
