import CityRow from './CityRow';
import './FavouritePage.css';
import { useGlobalContext } from '../../GlobalContext';

function FavouritePage () {
  const { favouriteCities } = useGlobalContext();

  const citiesRows = [];
  let index = 0;
  
  for (const city in favouriteCities) {
    citiesRows.push( <CityRow key={index} index={index} city={city} temp={favouriteCities[city]}/>)
    index ++;
  }
    

  return (
  <div id='favourite-page'>
    { Object.keys(favouriteCities).length > 0 &&
     <div id='records-header-container'>
      <label className='records-header'>City</label>
      <label className='records-header'>Tempreture Now</label>
    </div>}
    {citiesRows} 
    { Object.keys(favouriteCities).length === 0 &&
     <p id='empty-list'>No favourite cities</p> }
  </div> 
  );
};

export default FavouritePage;