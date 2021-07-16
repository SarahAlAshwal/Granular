import './SearchInput.css';
import { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';
import FavouritePage from '../FavouritePage/FavouritePage';
import { Cities } from '../../App';

interface Props {
  cities: string []
}

function SearchInput(props: Props) {
  const [city, setCity] = useState('');
  const [searchResult, setSearchResult] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  let result: number[] = [];
  const key = 'bbd1b0329b9ffdfe98ba1d24b01caa49';
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value);

  const add = () => {
    props.cities.push(city);
    alert(`${city} has been added to your favourite list`);
  }


  const submit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setSearchResult([]);
    if (city) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    .then(response => {
      result.push(response.data.main.temp);
      result.push(response.data.main.temp_min);
      result.push(response.data.main.temp_max);
      result.push(response.data.main.humidity);
      setSearchResult(result);
    }
    )
    .catch(error => console.log(error));
    setErrorMessage('');
    } else {
      setErrorMessage('Please enter a city')
    }
  };
  
  return (
    <div id='search-page-container'>
      <form onSubmit={submit}>
        <input id='search-input' placeholder='City' onChange={handleChange}></input>
        <button className='search-page-button'>Search</button>
      </form>
      { errorMessage && <span className='error'>{errorMessage}</span>}
      <ResultCard currentTemp={searchResult[0]} minTemp={searchResult[1]} maxTemp={searchResult[2]} humidity={searchResult[3]}/>
      <button className='search-page-button' onClick={add}>Add to Favourite</button>
    </div>
  );
  };

  export default SearchInput;