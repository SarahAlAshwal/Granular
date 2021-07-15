import './SearchInput';
import { useState } from 'react';
import axios from 'axios';

function SearchInput() {
  const [city, setCity] = useState('');
  const key = 'bbd1b0329b9ffdfe98ba1d24b01caa49';
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value);
  const submit = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    .then(res => console.log(res.data.main));
  }

  return (
    <>
    <input className='search-input' placeholder='City' onChange={handleChange}></input>
    <button onClick={submit}>Search</button>
    </>
  );
  };

  export default SearchInput;