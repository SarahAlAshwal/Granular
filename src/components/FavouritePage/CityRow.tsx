import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './CityRow.css';
import { useGlobalContext } from '../../GlobalContext';

library.add(fas);

interface Props {
  index: number
  city: string
  temp: number
}

function CityRow (props:Props) {
  const { favouriteCities } = useGlobalContext();
  
  return (
      <div className='row-container' key={props.index}>
        <label>{props.city}</label>
        <div>
          <label>{props.temp}</label>
          <span className='symbol'>&#8451;</span>
        </div>
        <FontAwesomeIcon className='' icon='trash' color='blue' size='1x'/>
      </div>
  );
};

export default CityRow;