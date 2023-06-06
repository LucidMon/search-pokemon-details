import React from 'react';
import './App.css';
import './assests/css/typesCard.css'
import { SearchPokemon } from './components/SearchPokemon';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchPokemon/>
    </div>
  );
}

export default App;
