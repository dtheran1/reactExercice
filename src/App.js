import React, { useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';
import Gif from './components/Gif';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword: 'programming' })
      .then(gifs => setGifs(gifs))
  }, [])
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(({ title, id, url }) =>
        <Gif
          key={id}
          id={id}
          title={title}
          url={url}
        />)
        }
        <button>Cambiar Gifs</button>
      </section>
    </div>
  );
}

export default App;
