import './SearchInput.css';
import { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';



function SearchInput() {
  const [city, setCity] = useState('');
  const [searchResult, setSearchResult] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  let result: number[] = [];
  const key = 'bbd1b0329b9ffdfe98ba1d24b01caa49';
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value);

  const submit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setSearchResult([]);
    if (city) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    .then(res => {
      result.push(res.data.main.temp);
      result.push(res.data.main.temp_min);
      result.push(res.data.main.temp_max);
      result.push(res.data.main.humidity);
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
        <button id='search-button'>Search</button>
      </form>
      { errorMessage && <span className='error'>{errorMessage}</span>}
      <ResultCard currentTemp={searchResult[0]} minTemp={searchResult[1]} maxTemp={searchResult[2]} humidity={searchResult[3]}/>
    </div>
  );
  };

  export default SearchInput;