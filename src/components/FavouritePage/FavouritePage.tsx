import CityRow from './CityRow';
import './FavouritePage.css';

interface Props {
cities: string[]
temp: number []
}

function FavouritePage (props: Props) {

  const citiesRows = props.cities.map( (city, index) => {
    return <CityRow key={index} city={city} temp={props.temp[index]}/>
  });

  return (
  <div id='favourite-page'>
    <div id='records-header-container'>
      <label className='records-header'>City</label>
      <label className='records-header'>Tempreture Now</label>
    </div>
    {citiesRows}
  </div>
  );
};

export default FavouritePage;