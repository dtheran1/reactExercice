import React from 'react';
import { Link, Route } from 'wouter';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/cats'>Gifs de Gatos</Link>
        <Link to='/gif/dog'>Gifs de Perros</Link>
        <Link to='/gif/realmadrid'>Gifs de RealMadrid</Link>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
