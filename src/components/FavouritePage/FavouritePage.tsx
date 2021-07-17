import CityRow from './CityRow';
import './FavouritePage.css';
import { useGlobalContext } from '../../GlobalContext';

function FavouritePage () {
  const { favouriteCities } = useGlobalContext();

  const citiesRows = favouriteCities.cities.map( (city, index) => {
    return <CityRow key={index} index={index} city={city} temp={favouriteCities.temp[index]}/>
  });

  return (
  <div id='favourite-page'>
    { favouriteCities.cities.length > 0 && <div id='records-header-container'>
      <label className='records-header'>City</label>
      <label className='records-header'>Tempreture Now</label>
    </div>}
    { favouriteCities.cities.length === 0 && 
      <p id='empty-list'>No favourite cities</p>
    }
    {citiesRows} 
  </div> 
  );
};

export default FavouritePage;