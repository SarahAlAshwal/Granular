import './SearchInput';
import { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';

export interface Temperature {
  [name: string]: number
}


function SearchInput() {
  const [city, setCity] = useState('');
  const [tempResult, setTempResult] = useState<Temperature[]>([]);
  const [humidity, setHumididty] = useState<number>();
  let temp :Temperature[] = []
  const key = 'bbd1b0329b9ffdfe98ba1d24b01caa49';
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value);
  const submit = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    .then(res => {
      temp =[
        {
          'Current Temperature': res.data.main.temp
        },
        {
          'Minimum Temperature': res.data.main.temp_min
        },
        {
          'Maximum Temperature': res.data.main.temp_max
        }
      ];
      setTempResult(temp);
      setHumididty(res.data.main.humidity);
    }
    )
    .catch(error => console.log(error))
  };

  return (
    <>
    <input className='search-input' placeholder='City' onChange={handleChange}></input>
    <button onClick={submit}>Search</button>
    <ResultCard tempArray={tempResult} humidity={humidity}/>
    </>
  );
  };

  export default SearchInput;