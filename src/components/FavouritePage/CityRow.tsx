import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './CityRow.css';
import { useGlobalContext } from '../../GlobalContext';


library.add(fas);

interface Props {
  index: number
  city: string
  temp: number | null
}

function CityRow (props:Props) {
  const { favouriteCities, setFavouriteCities } = useGlobalContext();

  const remove = (city: string): void => {
    const { [city]: remove, ...rest} = favouriteCities;
    setFavouriteCities (rest);
  }
  
  return (
      <div className='row-container' key={props.index}>
        <label>{props.city}</label>
        <div>
          <label>{props.temp}</label>
          <span className='symbol'>&#8451;</span>
        </div>
        <FontAwesomeIcon className='trash-icon' onClick={() => remove(props.city)} icon='trash' color='blue' size='1x'/>
      </div>
  );
};

export default CityRow;