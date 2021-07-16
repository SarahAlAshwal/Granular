import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

interface Props {
  key: number
  city: string
  temp: number
}

function CityRow (props:Props) {
  return (
      <div key={props.key}>
        <label>{props.city}</label>
        <label>{props.temp}</label>
        <FontAwesomeIcon className='' icon='trash' color='blue' size='1x'/>
      </div>
  );
};

export default CityRow;