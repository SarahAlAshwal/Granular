import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchPage/SearchInput';
import Header from './components/Header/Header';

function App() {
  const[showFavourite, setShowFavourite] = useState(false)

  const goFavourite = (event: React.SyntheticEvent) => setShowFavourite(true);
  const goHome = (event: React.SyntheticEvent) => setShowFavourite(false);

  return (
    <div className="App">
      <Header goFavourite={goFavourite} goHome={goHome}/>
      <h1 id='app-title'>My Weather App</h1>
      { ! showFavourite && <SearchInput/>}
      { showFavourite && <h1>Fav</h1>}
    </div>
  );
}

export default App;
