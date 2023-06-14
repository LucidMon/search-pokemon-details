import React, { useState } from 'react';
import './App.css';
import './assests/css/typesCard.css'
import { SearchPokemon } from './components/SearchPokemon';
import { Navbar } from './components/Navbar';
import { DataPokemon } from './components/DataPokemon';

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className="App">
      <Navbar/>
      <SearchPokemon onSearch={handleSearch}/>
      <DataPokemon searchValue={searchValue} />
    </div>
  )
}

export default App;
