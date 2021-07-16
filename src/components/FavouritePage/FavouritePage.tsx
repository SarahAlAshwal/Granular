import CityRow from './CityRow';
import stateContext from '../../StateContext';

interface Props {
cities: string[]
temp: number []
}

function FavouritePage (props: Props) {

  const citiesRows = props.cities.map( (city, index) => {
    return <CityRow key={index} city={city} temp={props.temp[index]}/>
  });

  console.log(props);

  return (
  <>
    {citiesRows}
  </>
  );
};

export default FavouritePage;