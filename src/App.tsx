import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchPage/SearchInput';
import Header from './components/Header/Header';
import FavouritePage from './components/FavouritePage/FavouritePage';
import axios from 'axios';
import { MyGlobalContext } from './GlobalContext'

export interface Cities {
  cities: string[]
  temp: number[]
}

function App() {
  const key = 'bbd1b0329b9ffdfe98ba1d24b01caa49';
  const[showFavourite, setShowFavourite] = useState(false);
  const [favouriteCities, setFavouriteCities] = useState<Cities>({ cities: [], temp: []});

  const goFavourite = (event: React.SyntheticEvent) => {
    setFavouriteCities({...favouriteCities, temp:[]})
    for (const city of favouriteCities.cities) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
      .then(response => {
        setFavouriteCities(prevState => {
          return {...favouriteCities, temp:[ ...prevState.temp, response.data.main.temp]}
        })
      })
      .catch(error => console.log(error))
    }
    console.log(favouriteCities.temp[0]);
    setShowFavourite(true);
  }

  const goHome = (event: React.SyntheticEvent) => setShowFavourite(false);

  return (
    <div className="App">
      <MyGlobalContext.Provider value= {{ favouriteCities, setFavouriteCities }}>
        <Header goFavourite={goFavourite} goHome={goHome}/>
        <h1 id='app-title'>My Weather App</h1>
        { ! showFavourite && <SearchInput />}
        { showFavourite && <FavouritePage />}
      </MyGlobalContext.Provider>  
      </div>
  );
}

export default App;
