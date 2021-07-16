import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './CityRow.css';

library.add(fas);

interface Props {
  key: number
  city: string
  temp: number
}

function CityRow (props:Props) {
  return (
      <div className='row-container' key={props.key}>
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