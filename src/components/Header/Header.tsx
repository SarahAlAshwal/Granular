import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

library.add(fas);

interface Props {
  goHome: (event: React.SyntheticEvent) => void
  goFavourite: (event: React.SyntheticEvent) => void
}

function Header (props:Props) {
  return (
    <div id='header-container'>
      <FontAwesomeIcon onClick={props.goHome} className='header-icon' icon='home' color='blue' size='2x'/>
      <FontAwesomeIcon onClick={props.goFavourite} className='header-icon' icon='star' color='blue' size='2x'/>
    </div>
  );
};

export default Header;