import axios from 'axios';

interface Props {
cities: string[]
}

function FavouritePage (props: Props) {
  
  const key = 'bbd1b0329b9ffdfe98ba1d24b01caa49';
  const citiesTemp = props.cities.map(city => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    .then(response => response.data.main.temp)
    .catch(error => console.log(error))
  });

  console.log(citiesTemp);

  const citiesRows = citiesTemp.map( (city) => {
    return(
      <div>
        <label>{props.cities[0]}</label>
        <label>temp</label>
      </div>
    )
  });

  return (
  <>
    {citiesRows}
  </>
  );
};

export default FavouritePage;